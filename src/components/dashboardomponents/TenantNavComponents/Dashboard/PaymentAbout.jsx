import React from "react";
import PaymentHistoryCard from "./PaymentHistoryCard";

const PaymentAbout = () => {
  const pncHistory = [
    { room: 101, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 102, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 103, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 104, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 105, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 106, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
    { room: 107, rent: "$400", date: " 22 / 10 / 2010", time: "5:30pm" },
  ];
  return (
    <div>
      <div className="flex gap-4">
        {/* Cashback earned card */}
        <div className="relative bg-[#e2e2e2] rounded-[20px] flex flex-col gap-4 items-center justify-center py-6 px-5">
          {/* Circle */}
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-8 border-[#464646] bg-[#4EC840] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#e2e2e2]"></div>
          </div>

          <p className="text-xl font-normal">Cashback earned</p>
          <p className="text-4xl font-medium text-[#4EC840]">$40</p>
        </div>

        {/* Rent paid card */}
        <div className="relative bg-[#e2e2e2] rounded-[20px] flex flex-col gap-4 items-center justify-center py-6 px-17">
          {/* Circle */}
          <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full border-8 border-[#464646] bg-gradient-to-r from-[#5500f8] to-[#d72638] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#e2e2e2]"></div>
          </div>

          <p className="text-xl font-normal">Rent paid</p>
          <p className="text-4xl font-semibold bg-gradient-to-r from-[#5500f8] to-[#d72638] bg-clip-text text-transparent">
            $400
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="text-lg font-normal my-3 text-[20px]">
          Payment and cashback history
        </div>
        <div className="flex flex-col gap-4">
          {pncHistory.map((data, i) => (
            <div key={i}>
              <PaymentHistoryCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentAbout;
