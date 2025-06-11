import { useMediaQuery } from "react-responsive";

const Smallabt = ({ heading, inner, imgpath }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3
          className={`${
            isSmallScreen ? `text-[25px]` : `text-[45px]`
          } font-medium`}
        >
          {heading}
        </h3>
      </div>
      <div className="flex gap-3 justify-between pr-[10%]">
        <div className="flex flex-col gap-3">
          {inner.map((item, x) => (
            <div
              key={item.subheading + x}
              className={isSmallScreen ? `w-[300px]` : `w-[600px]`}
            >
              <h2
                className={`${
                  isSmallScreen ? `text-[15px]` : `text-[25px]`
                } text-[#D72638]  font-medium`}
              >
                {item.subheading}
              </h2>
              <p
                className={`${
                  isSmallScreen ? `text-[13px] ` : `text-[22px] `
                } text-[#838383] `}
              >
                {item.para}
              </p>
            </div>
          ))}
        </div>
        {isSmallScreen ? null : (
          <div className="h-[400px] w-[400px]">
            <img src={imgpath} alt="Room" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Smallabt;
