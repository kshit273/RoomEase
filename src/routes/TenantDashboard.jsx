import React, { useEffect, useState } from "react";
import BackBtn from "../components/dashboardomponents/BackBtn";
import DashboardNav from "../components/dashboardomponents/DashboardNav";
import TenantDashComponents from "../components/dashboardomponents/TenantDashComponents";
import Logout from "../components/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TenantDashboard = ({ user, setUser }) => {
  const [bar, setBar] = useState(0);
  const [showLogout, setShowLogout] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    dob: user?.dob || "",
    gender: user?.gender || "",
    email: user?.email || "",
    phone: user?.phone || "",
    profilePicture: user?.profilePicture || "",
    password: "",
  });

  const tenantNavList = [
    "Dashboard",
    "Update Profile",
    "Rooms History",
    "View Legal docs",
    "Refer and earn",
    "Leave PG",
    "Log out",
  ];
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(res.data.message);

      // clear user state
      setUser(null);

      // redirect to home/login
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });
        setFormData((prev) => ({
          ...prev,
          firstName: res.data.firstName || "",
          lastName: res.data.lastName || "",
          dob: res.data.dob || "",
          gender: res.data.gender || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          profilePicture: res.data.profilePicture || "",
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute bottom-[-50px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>

      <section id="tenantDash" className="relative z-2 pt-[30px]">
        <div className={`w-full flex justify-center `}>
          <div className="w-[98%] h-full pb-[40px] bg-[#e1e1e1] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center px-5">
            <div className="w-full flex items-center justify-start py-5">
              <BackBtn />
            </div>
            <div className="w-full flex ">
              <div className="w-[85%] flex flex-col justify-center items-center ">
                <TenantDashComponents
                  user={user}
                  bar={bar}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>
              <div className="w-[15%] min-w-[250px] flex flex-col items-center sticky top-[30px]">
                <DashboardNav
                  bar={bar}
                  setBar={setBar}
                  setUser={setUser}
                  setShowLogout={setShowLogout}
                  navList={tenantNavList}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showLogout && (
        <Logout
          onConfirm={handleLogOut}
          onCancel={() => setShowLogout(false)}
        />
      )}
    </>
  );
};

export default TenantDashboard;
