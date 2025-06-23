import { useState } from "react";
import Like from "../components/Like";
const RoomCard = ({ RID, head, imgPath, desc, isVerified, review }) => {
  const [islikeHovered, setIsLikeHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreClicked, setMoreClicked] = useState(false);
  return (
    <div className="h-[390px] w-[350px] rounded-[10px]">
      <div className="h-[280px] w-[350px] flex items-center justify-center relative">
        <img
          src={imgPath}
          alt=""
          className="rounded-[20px] w-[330px] h-[260px]"
        />
      </div>
      <div className="mx-[10px]">
        <p className="text-[22px] font-medium text-[#1a1a1a]">{head}</p>
      </div>
      <div className="flex justify-between">
        <div className="mx-[10px] flex flex-col">
          <p className="text-[17px] text-[#919191]">{desc}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) =>
              i < review ? (
                <img
                  key={i}
                  src="./images/star-filled.png"
                  alt="star"
                  className="w-[13px] h-[13px]"
                />
              ) : (
                <img
                  key={i}
                  src="./images/star-empty.png"
                  alt="star-empty"
                  className="w-[13px] h-[13px]"
                />
              )
            )}
          </div>
        </div>
        <div className="flex gap-[10px] items-end mr-[10px] ">
          <button
            onMouseEnter={() => setIsLikeHovered(true)}
            onMouseLeave={() => setIsLikeHovered(false)}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked((prev) => !prev);
            }}
            className="cursor-pointer"
          >
            <div
              className={`w-[40px] h-[40px] bg-[#d0d0d0] rounded-full flex items-center justify-center p-[9px] duratiom-300`}
            >
              {/* {isLiked ? (
                <img src="/images/heart-full.png" alt="" />
              ) : (
                <img
                  src={
                    islikeHovered
                      ? "/images/redHeart.png"
                      : "/images/greyHeart.png"
                  }
                  alt=""
                />
              )} */}
              <Like />
            </div>
          </button>
          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="w-[40px] h-[40px]  bg-[#d0d0d0] rounded-full flex items-center justify-center p-[7px]">
              <img src="/images/more.png" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
