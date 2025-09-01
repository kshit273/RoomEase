import React, { useState } from "react";
import BaseNotification from "../../TenantNavComponents/Dashboard/Notification/BaseNotification";

const Dash3 = () => {
  const [announcement, setAnnouncement] = useState("");

  const lines = announcement.split("\n");

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
      <div className="bg-[#e2e2e2] rounded-2xl p-4 w-full max-w-[600px] mx-auto flex flex-col my-8">
        <textarea
          rows={4} // controls how many lines are visible
          className="bg-transparent border border-[#bdbdbd] text-[#5c5c5c] text-[16px] px-3 py-2 rounded-lg resize-none outline-none focus:ring-2 focus:ring-[#d72638]"
          placeholder="Type your announcement here..."
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button className="bg-gradient-to-r from-[#ff0058] to-[#d72638] text-white text-[16px] font-medium px-10 py-2 rounded-full shadow transition hover:opacity-90">
            Send
          </button>
        </div>
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

export default Dash3;
