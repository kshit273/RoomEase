import React, { useRef, useState } from "react";
import RoomCard from "../components/RoomCard";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const RoomSlider = ({ list, heading, onRoomClick, desc }) => {
  const isMedScreen = useMediaQuery({ maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const scrollRef = useRef();
  const navigate = useNavigate();

  const handleCardClick = (RID) => {
    navigate(`/pg/${RID}`);
  };
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 700;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={`${isMedScreen ? `mt-[30px]` : `mt-[50px]`}  w-[90%]`}>
      <div
        className={`flex ${
          isMedScreen ? `gap-[10px]` : `gap-[20px]`
        }  items-center`}
      >
        <p
          className={`text-[#1a1a1a] ${
            isMedScreen ? `text-[23px]` : `text-[35px]`
          } font-medium `}
        >
          {heading}
        </p>
        <img
          src="/images/arrowBlack.png"
          alt=""
          className={`${
            isMedScreen ? `h-[14px]` : `h-[20px]`
          } cursor-pointer hover:translate-x-2 duration-300`}
        />
      </div>
      <p
        className={`text-[#969696] ${
          isMedScreen ? `text-[15px]` : `text-[20px]`
        } mb-[5px]`}
      >
        {desc}
      </p>
      <div className=" flex items-center relative">
        {!isMedScreen ? (
          <button
            className="flex items-center justify-center absolute left-[-4%] bottom-[50%] z-10 h-[65px] w-[65px] bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#b9b9b9]  transition duration-400"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            type="button"
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
          >
            <img
              src={
                isLeftHovered
                  ? "/images/arrowWhite.png"
                  : "/images/arrowBlack.png"
              }
              alt="arrow-right"
              className="h-[20px] w-[20px] rotate-180"
            />
          </button>
        ) : null}

        <div
          ref={scrollRef}
          className={`flex ${
            isMedScreen ? `gap-0` : `gap-[10px]`
          }  overflow-x-auto scroll-smooth w-full no-scrollbar`}
          style={{ scrollBehavior: "smooth" }}
        >
          {list.map(
            ({
              RID,
              head,
              imgPath,
              desc,
              isVerified,
              isLiked,
              review,
              isPremium,
            }) => (
              <div
                key={head}
                onClick={() => {
                  onRoomClick && onRoomClick(RID);
                  handleCardClick(RID);
                }}
                style={{ cursor: "pointer" }}
              >
                <RoomCard
                  RID={RID}
                  key={head}
                  head={head}
                  imgPath={imgPath}
                  desc={desc}
                  isVerified={isVerified}
                  isLiked={isLiked}
                  review={review}
                  isPremium={isPremium}
                />
              </div>
            )
          )}
        </div>
        {!isMedScreen ? (
          <button
            className="flex items-center justify-center absolute right-[-5%] bottom-[50%] h-[70px] w-[70px] z-10 bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#b9b9b9]  transition duration-400"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            type="button"
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
          >
            <img
              src={
                isRightHovered
                  ? "/images/arrowWhite.png"
                  : "/images/arrowBlack.png"
              }
              alt="arrow-right"
              className="h-[20px] w-[20px]"
            />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default RoomSlider;
