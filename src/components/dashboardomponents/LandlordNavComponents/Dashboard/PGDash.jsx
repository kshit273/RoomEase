import React from "react";
import RoomTemp from "./RoomTemp";

const PGDash = () => {
  return (
    <div className="w-full bg-[#d9d9d9] p-4 rounded-[20px]">
      <div className="text-[28px] font-medium text-[#5c5c5c]">
        Rooms in Sunlight PG
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 my-4">
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={101}
            rent={8000}
            securityDeposit={8000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-20", "2025-07-20"],
                startingDate: "2025-07-2",
              },
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20", "2025-09-02"],
                startingDate: "2025-07-20",
              },
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-08",
              },
            ]}
          />
        </div>

        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={102}
            rent={8000}
            securityDeposit={8000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>

        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={103}
            rent={8000}
            securityDeposit={8000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={104}
            rent={6000}
            securityDeposit={6000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={105}
            rent={6000}
            securityDeposit={6000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={106}
            rent={6000}
            securityDeposit={6000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={107}
            rent={6000}
            securityDeposit={6000}
            tenants={[]}
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <RoomTemp
            roomNumber={108}
            rent={6000}
            securityDeposit={6000}
            tenants={[
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
              {
                name: "Hero Hera lal",
                id: "8rkFsP2W",
                leasePeriod: "2025-2026",
                mobNo: 9368578171,
                rentPaid: ["2025-08-19", "2025-07-20"],
                startingDate: "2025-07-20",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PGDash;
