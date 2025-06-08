import { about } from "../constants/Abt";
import Leftabt from "../components/Leftabt";
import RightAbt from "../components/RightAbt";
import { useMediaQuery } from "react-responsive";
import Smallabt from "../components/Smallabt";
import JoinAbt from "../components/JoinAbt";

const About = () => {
  const isMedScreen = useMediaQuery({ maxWidth: 1800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

  // Timeline position and height
  const timelineLeft = isMedScreen ? "left-[40px]" : "left-[755px]";
  let timelineHeight = "h-[1070px]";
  if (isSmallScreen) {
    timelineHeight = "h-[1150px]";
  } else if (isMedScreen) {
    timelineHeight = "h-[1700px]";
  }

  // Content margin and gap
  const contentMarginGap = isSmallScreen
    ? "ml-15 mt-20 gap-15"
    : "ml-25 mt-32 gap-25";

  return (
    <section id="about" className="relative z-2 pt-[100px]">
      {/* Timeline vertical red line */}
      <div
        className={`pointer-events-none absolute top-5 ${timelineLeft} ${timelineHeight} bg-[#D72638] w-[2px] z-0 mt-[230px]`}
      />
      {/* Content with circles */}
      <div className={`flex flex-col ${contentMarginGap} relative z-10`}>
        {about.map((item, idx) => (
          <div key={idx} className="relative flex items-start">
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
            <div className="flex-1">
              {isMedScreen ? (
                <Smallabt heading={item.heading} inner={item.inner} />
              ) : idx % 2 === 0 ? (
                <Leftabt heading={item.heading} inner={item.inner} />
              ) : (
                <RightAbt heading={item.heading} inner={item.inner} />
              )}
            </div>
          </div>
        ))}
        {isSmallScreen || isMedScreen ? (
          <JoinAbt isMedScreen={isMedScreen} isSmallScreen={isSmallScreen} />
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default About;
