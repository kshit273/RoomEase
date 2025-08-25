import React from "react";

const DashboardNav = ({ bar, setBar }) => {
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
    console.log(ele, "Clicked");
    setBar(i);
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
