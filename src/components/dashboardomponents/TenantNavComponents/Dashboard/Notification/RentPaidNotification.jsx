import React from "react";

const RentPaidNotification = ({ data }) => {
  const dateTime = new Date(`${data.date}T${data.time}`);

  // Format date nicely (e.g., "22 October 2025")
  const formattedDate = dateTime.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format time nicely (e.g., "5:30 PM")
  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="bg-[#e2e2e2] rounded-[20px] p-4">
      <div className="flex flex-col justify-center gap-2 ">
        <div className="flex flex-col gap-0.5">
          <p className="text-[19px] text-[#49c800] font-medium">Rent Paid</p>
          <p className="text-[15px] text-[#5c5c5c] font-medium">{data.msg}</p>
        </div>
      </div>
      <div className="flex justify-between text-[12px] text-gray-700 mt-4">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};
export default RentPaidNotification;
