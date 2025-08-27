import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./routes/search/Search";
import Userlogin from "./routes/Userlogin";
import PgInfo from "./sections/PgInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { supportedCities } from "./constants/Data";
import { Houses } from "./constants/Houses";
import SearchResults from "./sections/SearchResults";
import Messenger from "./routes/Messenger";
import Navbar from "./components/Navbar";
import TenantDashboard from "./routes/TenantDashboard";
import LandlordDashboard from "./routes/LandlordDashboard";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState(null);
  const [nearbyPGs, setNearbyPGs] = useState([]);
  const [cityCode, setCityCode] = useState(null);

  const location = useLocation();

  function getDistance(lat1, lon1, lat2, lon2) {
    const toRad = (deg) => (deg * Math.PI) / 180;

    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in KM
  }
  function findNearestCity(userLat, userLng) {
    let closestCity = null;
    let minDistance = Infinity;

    for (const city of supportedCities) {
      const distance = getDistance(userLat, userLng, city.lat, city.lng);
      if (distance < minDistance) {
        minDistance = distance;
        closestCity = city;
      }
    }

    return closestCity;
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        try {
          const res = await axios.get("http://localhost:5000/geocode", {
            params: { lat, lng },
          });

          // Google API response is inside res.data
          console.log("Geocode result:", res.data);

          const nearestCity = findNearestCity(lat, lng);

          if (nearestCity) {
            setCityName(nearestCity.name);
            setCityCode(nearestCity.code);

            const filteredPGs = Houses.filter((pg) =>
              pg.RID.startsWith(nearestCity.code)
            );
            setNearbyPGs(filteredPGs);
          } else {
            console.log("No matching city found");
          }
        } catch (err) {
          console.error("Geocoding failed", err);
        }
      },
      (err) => {
        console.error("Location access denied", err);
      }
    );
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/verify-token", {
          withCredentials: true, // 👈 send cookies
        });

        if (res.data.valid) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <ScrollToTop />
      {![
        "/messenger",
        "/userlogin",
        "/tenant/dashboard",
        "/landlord/dashboard",
      ].includes(location.pathname) && <Navbar user={user} setUser={setUser} />}

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/search/*"
          element={<Search cityName={cityName} nearbyPGs={nearbyPGs} />}
        />
        <Route path="/pg/:RID" element={<PgInfo />} />
        <Route path="/search/:search_keyword" element={<SearchResults />} />
        <Route path="/landlord/dashboard" element={<LandlordDashboard />} />
        <Route
          path="/tenant/dashboard"
          element={<TenantDashboard setUser={setUser} />}
        />
        <Route path="/userlogin" element={<Userlogin setUser={setUser} />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </>
  );
}

export default App;
