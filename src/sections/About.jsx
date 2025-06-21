import { about } from "../constants/Abt";
import Leftabt from "../components/Leftabt";
import RightAbt from "../components/RightAbt";
import { useMediaQuery } from "react-responsive";
import Smallabt from "../components/Smallabt";
import JoinAbt from "../components/JoinAbt";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef();
  const isMedScreen = useMediaQuery({ maxWidth: 1800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });

  const timelineLeft = isMedScreen ? "left-[40px]" : "left-[755px]";
  let timelineHeight = "h-[1120px]";
  if (isSmallScreen) {
    timelineHeight = "h-[1150px]";
  } else if (isMedScreen) {
    timelineHeight = "h-[1750px]";
  }

  const contentMarginGap = isSmallScreen
    ? "ml-15 mt-20 gap-15"
    : "ml-25 mt-32 gap-25";

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const PulseCircle = ({ triggerRef }) => {
    const pulseRef = useRef();

    useEffect(() => {
      if (!pulseRef.current || !triggerRef.current) return;
      gsap.fromTo(
        pulseRef.current,
        { scale: 0.7, opacity: 0.3 },
        {
          scale: 1.2,
          opacity: 0,
          duration: 1.5,
          repeat: -1,
          ease: "power2.out",
          paused: false,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 85%",
            toggleActions: "play pause resume reset",
            once: false,
          },
        }
      );
    }, [triggerRef]);

    return (
      <div
        ref={pulseRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "100%",
          height: "100%",
          background: "#d72638",
          opacity: 0.7,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    );
  };

  return (
    <section id="about" className="relative z-2 pt-[100px]">
      <div
        ref={timelineRef}
        className={`pointer-events-none absolute top-5 origin-top ${timelineLeft} ${timelineHeight} bg-[#D72638] w-[2px] z-0 ${
          isSmallScreen
            ? ` mt-[190px]`
            : isMedScreen
            ? ` mt-[230px]`
            : ` mt-[230px]`
        }`}
      />

      <div className={`flex flex-col ${contentMarginGap} relative z-10`}>
        {about.map((item, idx) => {
          const outerCircleRef = useRef(null);
          return (
            <div key={idx} className="relative flex items-start">
              <div
                ref={outerCircleRef}
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
                  style={{ zIndex: 2 }}
                >
                  <PulseCircle triggerRef={outerCircleRef} />
                  <div
                    className={`${
                      isSmallScreen ? `w-[13px] h-[13px]` : `w-[18px] h-[18px]`
                    } rounded-full bg-[#D72638]`}
                  ></div>
                </div>
              </div>
              <div className="flex-1">
                {isMedScreen ? (
                  <Smallabt
                    heading={item.heading}
                    inner={item.inner}
                    imgpath={item.imgpath}
                  />
                ) : idx % 2 === 0 ? (
                  <Leftabt
                    heading={item.heading}
                    inner={item.inner}
                    imgpath={item.imgpath}
                  />
                ) : (
                  <RightAbt
                    heading={item.heading}
                    inner={item.inner}
                    imgpath={item.imgpath}
                  />
                )}
              </div>
            </div>
          );
        })}
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
