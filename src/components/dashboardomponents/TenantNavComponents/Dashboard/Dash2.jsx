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

      <div className="">
        <MonthlyRentStatus
          dates={[
            "2025-07-21",
            "2025-06-19",
            "2025-06-20",
            "2025-05-22",
            "2025-04-22",
          ]}
        />
      </div>

      <div className="">
        <ZTRS percentage={75} />
      </div>
    </div>
  );
};

export default Dash2;
