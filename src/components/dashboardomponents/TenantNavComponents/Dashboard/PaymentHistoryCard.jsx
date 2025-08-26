import React from "react";

const PaymentHistoryCard = ({ data }) => {
  const dateTime = new Date(`${data.date}T${data.time}`);
  const monthName = dateTime.toLocaleString("en-US", { month: "long" });

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
    <div className="bg-[#e2e2e2] rounded-[20px] p-6 pb-2 flex flex-col">
      {/* Top row: Amount + Cashback */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-3xl font-semibold text-[#850EB1]">${data.rent}</p>
          <p className="text-[15px] font-normal text-black/80">
            for the month of {monthName}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-[#4EC840]">
            + ${data.cashback}
          </p>
        </div>
      </div>

      {/* Bottom row: Date + Time */}
      <div className="flex justify-between text-[12px] text-gray-700 mt-4">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;
