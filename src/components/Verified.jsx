const Verified = () => {
  return (
    <div>
      <div className="flex h-[15px] w-[100px] gap-[2px] bg-[#49ADF4] rounded-full ">
        <div className="flex items-center justify-center">
          <img
            src="./images/verify.png"
            alt="verified"
            className="h-[15px] w-[15px]"
          />
        </div>
        <div className="flex items-center justify-center font-medium text-[#e8e8e8] text-[8px]">
          RoomEase Verified
        </div>
      </div>
    </div>
  );
};

export default Verified;
