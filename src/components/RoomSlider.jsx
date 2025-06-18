import React, { useRef, useState } from "react";
import RoomCard from "../components/RoomCard";

const RoomSlider = ({ list, heading, onRoomClick }) => {
  const scrollRef = useRef();
  const [isRightHovered, setIsRightHovered] = useState(false);
  const [isLeftHovered, setIsLeftHovered] = useState(false);

  // Scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 1000;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mt-[100px]  w-[90%]">
      <p className="text-[#1a1a1a] text-[45px] font-medium mb-[15px]">
        {heading}
      </p>
      <div className=" flex items-center relative">
        <button
          className="flex items-center justify-center absolute left-[-5%] z-10 h-[100px] w-[100px] bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#b9b9b9]  transition duration-400"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          type="button"
          onMouseEnter={() => setIsLeftHovered(true)}
          onMouseLeave={() => setIsLeftHovered(false)}
        >
          <img
            src={
              isLeftHovered
                ? "./images/arrowWhite.png"
                : "./images/arrowBlack.png"
            }
            alt="arrow-right"
            className="h-[35px] w-[35px] rotate-180"
          />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-[25px] overflow-x-auto scroll-smooth w-full no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {list.map(
            ({ RID, head, imgPath, desc, isVerified, isLiked, review }) => (
              <div
                key={head}
                onClick={() => onRoomClick && onRoomClick(RID)}
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
                />
              </div>
            )
          )}
        </div>
        <button
          className="flex items-center justify-center absolute right-[-5%] h-[100px] w-[100px] z-10 bg-[#e8e8e8] rounded-full shadow p-2 hover:bg-[#b9b9b9]  transition duration-400"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          type="button"
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
        >
          <img
            src={
              isRightHovered
                ? "./images/arrowWhite.png"
                : "./images/arrowBlack.png"
            }
            alt="arrow-right"
            className="h-[35px] w-[35px]"
          />
        </button>
      </div>
    </div>
  );
};

export default RoomSlider;
