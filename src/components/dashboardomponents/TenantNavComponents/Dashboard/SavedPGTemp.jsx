import React from "react";

const SavedPGTemp = ({ data }) => {
  return (
    <div className="flex gap-6">
      <div>
        <div className="h-[200px] w-[200px] rounded-[20px] bg-[#1a1a1a]"></div>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="">
          <p className="text-[#464646] font-medium text-[24px]">
            {data.pgName}
          </p>
        </div>
        <div className="w-[450px]">
          <p className="text-[#5c5c5c] text-[18px]">{data.pgAddress}</p>
        </div>
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-gradient-to-r from-[#d72638] to-[#ff0084] text-[15px] text-white font-normal rounded-full ">
            Message
          </button>
          <button className="p-2 border-[1px] border-[#1a1a1a] rounded-full">
            <img
              src="../images/call.png"
              alt=""
              className="h-[20px] w-[20px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedPGTemp;
