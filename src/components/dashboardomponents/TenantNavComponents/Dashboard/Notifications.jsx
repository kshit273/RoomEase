import React from "react";
import BaseNotification from "./Notification/BaseNotification";

const Notifications = () => {
  const notifications = [
    {
      msg: "sample message : today there will be a cut of electricity for 2-3 hours from 5pm to 6pm so kindly be prepared",
      date: "2025-04-18",
      time: "11:15:00",
    },
    {
      msg: "sample message : today there will be a cut of electricity for 2-3 hours from 5pm to 6pm so kindly be prepared",
      date: "2025-04-18",
      time: "11:15:00",
    },
    {
      msg: "sample message : today there will be a cut of electricity for 2-3 hours from 5pm to 6pm so kindly be prepared",
      date: "2025-04-18",
      time: "11:15:00",
    },
    {
      msg: "sample message : today there will be a cut of electricity for 2-3 hours from 5pm to 6pm so kindly be prepared",
      date: "2025-04-18",
      time: "11:15:00",
    },
    {
      msg: "sample message : today there will be a cut of electricity for 2-3 hours from 5pm to 6pm so kindly be prepared",
      date: "2025-04-18",
      time: "11:15:00",
    },
  ];
  return (
    <div className="h-full p-4">
      <div>
        <p className="text-[24px] text-[#5c5c5c] font-medium mb-2">
          Notifications
        </p>
      </div>
      <div className="relative">
        <div className="h-[520px] overflow-y-auto no-scrollbar flex flex-col items-center justify-start">
          {notifications.length === 0 ? (
            <p className="text-[#5c5c5c] text-[18px] mt-4">
              No new notifications
            </p>
          ) : (
            notifications.map((notification, index) => (
              <div key={index} className="mb-4 rounded">
                <BaseNotification data={notification} />
              </div>
            ))
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 pointer-events-none bg-gradient-to-t from-[#d9d9d9] via-[#d9d9d9]/80 to-transparent"></div>
      </div>
    </div>
  );
};

export default Notifications;
