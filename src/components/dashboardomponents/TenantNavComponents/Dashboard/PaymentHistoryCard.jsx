import React from "react";

const PaymentHistoryCard = () => {
  return (
    <div className="bg-[#e2e2e2] rounded-[20px] p-6 pb-2 flex flex-col">
      {/* Top row: Amount + Cashback */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-3xl font-semibold text-[#850EB1]">$400</p>
          <p className="text-[16px] font-normal text-black/80">
            from Rohan , room 101 for the month of July
          </p>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-[#4EC840]">+ $10</p>
          <p className="text-sm text-gray-600">cashback earned</p>
        </div>
      </div>

      {/* Bottom row: Date + Time */}
      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <span>05/07/2025</span>
        <span>03:39 pm</span>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;
