import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNav = ({ bar, setBar, setUser }) => {
  const navigate = useNavigate();
  const navList = [
    "Dashboard",
    "Update Profile",
    "Rooms History",
    "View Legal docs",
    "Refer and earn",
    "Leave PG",
    "Log out",
  ];

  const handleClick = (ele, i) => {
    ele === "Log out" ? handleLogOut() : null;
    setBar(i);
  };

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(res.data.message);

      // clear any user state in frontend
      setUser(null);

      // optionally redirect to login
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };
  return (
    <div className="w-full flex flex-col gap-3 justify-center p-5">
      {navList.map((ele, i) => (
        <div
          key={i}
          className={`${
            ele == "Leave PG" || ele == "Log out"
              ? `text-[#d72638] hover:text-[#e8e8e8] hover:bg-[#d72638]`
              : `text-[#1a1a1a] hover:bg-[#dbdbdb]`
          } ${
            bar == i && i != 5
              ? `bg-[#d7d7d7]`
              : bar == i && i == 5
              ? `bg-[#d72638] text-[#e8e8e8]`
              : ``
          } w-full p-3 text-[20px] rounded-[10px] cursor-pointer duration-200`}
          onClick={() => {
            handleClick(ele, i);
          }}
        >
          {ele}
        </div>
      ))}
    </div>
  );
};

export default DashboardNav;
