import React from "react";
import PGAbout from "./PGAbout";
import MonthlyRentStatus from "./MonthlyRentStatus";
import ZTRS from "./ZTRS";

const Dash2 = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className="col-span-2">
        <PGAbout />
      </div>

      <div className="bg-gray-200 p-4">
        <MonthlyRentStatus />
      </div>

      <div className="bg-gray-300 p-4">
        <ZTRS />
      </div>
    </div>
  );
};

export default Dash2;
