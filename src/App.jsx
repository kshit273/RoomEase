import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./routes/search/Search";
import PgInfo from "./sections/PgInfo";
import { useEffect, useState } from "react";
import axios from "axios";
import { supportedCities } from "./constants/Data";
import { Houses } from "./constants/Houses";

function App() {
  const [cityName, setCityName] = useState(null);
  const [nearbyPGs, setNearbyPGs] = useState([]);
  const [cityCode, setCityCode] = useState(null);

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
          const res = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDFEAxMgUN22BvusiI6TPPOdzPVKTGeQa0`
          );

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

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<Search cityName={cityName} nearbyPGs={nearbyPGs} />}
        />
        <Route path="/pg/:RID" element={<PgInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
