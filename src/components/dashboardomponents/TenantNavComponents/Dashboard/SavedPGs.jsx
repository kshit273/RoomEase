import React from "react";
import SavedPGTemp from "./SavedPGTemp";

const SavedPGs = () => {
  const pgs = [
    {
      pgName: "Sunlight PG",
      pgAddress:
        "C33J+88Q Maya PG,Bagryal,village, near DIT college, oppostie Mega county,Salan Gaon,Bhagwant Pur, Dehradun",
    },
    {
      pgName: "Sunlight PG",
      pgAddress:
        "C33J+88Q Maya PG,Bagryal,village, near DIT college, oppostie Mega county,Salan Gaon,Bhagwant Pur, Dehradun",
    },
    {
      pgName: "Sunlight PG",
      pgAddress:
        "C33J+88Q Maya PG,Bagryal,village, near DIT college, oppostie Mega county,Salan Gaon,Bhagwant Pur, Dehradun",
    },
  ];
  return (
    <div className="flex flex-col gap-4 bg-[#d9d9d9] p-4 rounded-[20px]">
      <div className="p-2">
        <p className="text-[#464646] text-[32px] font-medium">SavedPGs</p>
      </div>
      <div className="flex flex-col gap-4">
        {pgs.map((pg, i) => (
          <div className="w-full" key={i}>
            <SavedPGTemp data={pg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedPGs;
