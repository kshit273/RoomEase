import React from "react";

const RentDue = () => {
  const handlePay = () => {
    console.log("Rent payed");
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <p className="text-[26px] font-medium text-[#5c5c5c]">Rent Due</p>
      </div>
      <div className="flex flex-col gap-1 text-[18px]">
        <div className="flex gap-4">
          <p>Next due</p>
          <p>02/02/2026</p>
        </div>

        <div className="flex gap-4">
          <p>Amount </p>
          <p>$400</p>
        </div>
      </div>
      <div className="flex gap-4 my-2">
        <button
          className="py-2 px-12 rounded-[40px] text-[18px] bg-gradient-to-r from-[#d72638] to-[#5500f8] text-white cursor-pointer"
          onClick={handlePay}
        >
          Pay now
        </button>

        <button className="border-3 border-[#d72638] text-[#d72638] text-[18px] font-medium py-2 px-4 rounded-[40px] ">
          Due in 4 days
        </button>
      </div>
    </div>
  );
};

export default RentDue;
