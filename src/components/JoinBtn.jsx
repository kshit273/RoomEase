const JoinBtn = ({ isSmallScreen, isMedScreen }) => {
  return (
    <div
      className={`${
        isSmallScreen
          ? `w-[90px] h-[30px] text-[12px]`
          : `w-[150px] h-[50px] text-xl`
      }  bg-[#d72638] rounded-[5px] flex items-center justify-center text-[#eaeaea]  font-medium`}
    >
      Join Now
    </div>
  );
};

export default JoinBtn;
