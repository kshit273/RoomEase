import JoinBtn from "./JoinBtn";

const JoinAbt = ({ isMedScreen, isSmallScreen }) => {
  return (
    <div className="relative flex items-start">
      {/* Circle on the timeline */}
      <div
        className={`absolute`}
        style={{
          left: isSmallScreen ? -34.5 : isMedScreen ? -82 : 633,
          top: 5,
          zIndex: 10,
        }}
      >
        <div
          className={`${
            isSmallScreen ? `w-[30px] h-[30px]` : `w-[45px] h-[45px]`
          }  rounded-full bg-[#d9d9d9] flex items-center justify-center`}
        >
          <div
            className={`${
              isSmallScreen ? `w-[13px] h-[13px]` : `w-[18px] h-[18px]`
            } rounded-full bg-[#D72638]`}
          ></div>
        </div>
      </div>
      {/* Section content */}
      <div
        className={`flex flex-col gap-3 ${
          isSmallScreen ? `w-[300px]` : `w-[600px]`
        }`}
      >
        <h3
          className={`${
            isSmallScreen ? `text-[25px]` : `text-[45px]`
          } font-medium`}
        >
          Consider joining ?
        </h3>
        <p
          className={`${
            isSmallScreen ? `text-[13px] ` : `text-[22px] `
          } text-[#838383] `}
        >
          Looking to rent out a room? RoomEase helps you connect with reliable
          tenants and makes property management a breeze.
        </p>
        <div>
          <JoinBtn isSmallScreen={isSmallScreen} isMedScreen={isMedScreen} />
        </div>
      </div>
    </div>
  );
};

export default JoinAbt;
