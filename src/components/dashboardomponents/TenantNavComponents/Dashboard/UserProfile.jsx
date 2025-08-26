import React from "react";

const UserProfile = () => {
  return (
    <div className="flex gap-6">
      <div>
        {/* <img src="" alt="" /> */}
        <div className="w-[150px] h-[150px] bg-[#1a1a1a] rounded-full"></div>
      </div>
      <div className="flex flex-col justify-center">
        <span className="font-medium text-[20px]">John Snow</span>
        <span className="text-[16px] text-[#666666]">+91 9368578171</span>
        <span className="text-[16px] text-[#666666]">divya_217@gmail.com</span>
        <span className="text-[16px] text-[#666666]">Drkh3F5st7U</span>
      </div>
    </div>
  );
};

export default UserProfile;
