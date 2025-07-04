import { useState, useEffect, useRef } from "react";
import Like from "../components/Like";
import { useMediaQuery } from "react-responsive";

const RoomCard = ({
  RID,
  head,
  imgPath,
  desc,
  isVerified,
  review,
  isPremium,
  isPremiumSlider,
}) => {
  const isMedScreen = useMediaQuery({ maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const [islikeHovered, setIsLikeHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreClicked, setMoreClicked] = useState(false);

  const moreRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreClicked(false);
      }
    };

    if (isMoreClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMoreClicked]);

  return (
    <div
      className={`${
        isMedScreen ? `h-[260px] w-[250px]` : `h-[390px] w-[350px]`
      } rounded-[10px] relative`}
    >
      <div
        className={`${
          isMedScreen ? `h-[180px] w-[250px]` : `h-[280px] w-[350px]`
        } flex items-center justify-center relative`}
      >
        <img
          src={imgPath}
          alt=""
          className={
            isMedScreen
              ? `rounded-[14px] w-[230px] h-[160px]`
              : `rounded-[20px] w-[330px] h-[260px]`
          }
        />
        <div
          className={`absolute inset-0 ${
            isMedScreen ? `m-[17px]` : `m-[20px]`
          }`}
        >
          {isVerified ? (
            <div
              className={`${
                isMedScreen
                  ? `w-[125px] h-[18px] p-[2px]`
                  : `w-[185px] h-[30px] p-[5px]`
              } flex gap-[5px]  bg-[#e8e8e8] rounded-[20px]  mb-[10px] font-medium`}
            >
              <img src="/images/verify2.png" alt="verified" />
              <p
                className={`text-[#383838] ${
                  isMedScreen ? `text-[10px]` : `text-[15px]`
                } `}
              >
                RoomEase Verified
              </p>
            </div>
          ) : null}
          {isPremium ? (
            <div
              className={`flex ${
                isMedScreen
                  ? `w-[80px] h-[19px] `
                  : `w-[115px] h-[30px] pr-[10px] `
              }  gap-[5px]  items-center  bg-[#1a1a1a]  rounded-[20px]   font-medium`}
            >
              <img
                src="/images/crown.png"
                alt="verified"
                className={
                  isMedScreen ? `h-[15px] ml-[5px]` : `h-[20px] ml-[8px]`
                }
              />

              <p
                className={`${
                  isMedScreen ? `text-[10px]` : `text-[15px]`
                } text-[#d8d8d8] `}
              >
                Premium
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mx-[10px]">
        <p
          className={`${
            isMedScreen ? `text-[16px]` : `text-[22px]`
          } font-medium ${
            isPremiumSlider ? `text-[#c0c0c0]` : `text-[#1a1a1a]`
          } `}
        >
          {head}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="mx-[10px] flex flex-col">
          <p
            className={`${
              isMedScreen ? `text-[11px]` : `text-[17px]`
            } text-[#919191]`}
          >
            {desc}
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) =>
              i < review ? (
                <img
                  key={i}
                  src="/images/star-filled.png"
                  alt="star"
                  className={
                    isMedScreen ? `w-[10px] h-[10px]` : `w-[13px] h-[13px]`
                  }
                />
              ) : (
                <img
                  key={i}
                  src="/images/star-empty.png"
                  alt="star-empty"
                  className={
                    isMedScreen ? `w-[10px] h-[10px]` : `w-[13px] h-[13px]`
                  }
                />
              )
            )}
          </div>
        </div>
        <div
          className="flex gap-[10px] items-end mr-[10px] relative"
          ref={moreRef}
        >
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
              className={`${
                isMedScreen ? `w-[20px] h-[20px]` : `w-[40px] h-[40px] p-[7px]`
              } bg-[#d0d0d0] rounded-full flex items-center justify-center duration-300`}
            >
              <Like size={isMedScreen ? 14 : 30} />
            </div>
          </button>

          <button
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setMoreClicked((prev) => !prev);
            }}
          >
            <div
              className={`${
                isMedScreen
                  ? `w-[20px] h-[20px] p-[4px]`
                  : `w-[40px] h-[40px] p-[7px]`
              } bg-[#d0d0d0] rounded-full flex items-center justify-center `}
            >
              <img src="/images/more.png" alt="More options" />
            </div>
          </button>

          {isMoreClicked && (
            <div className="absolute top-[-110px] right-0 bg-[#e8e8e8] shadow-lg rounded-[10px] p-[8px] w-[180px] z-50">
              <ul className="flex flex-col gap-2 text-[15px] text-[#1a1a1a]">
                <li
                  className="hover:bg-[#cacaca] p-[5px] rounded-[5px] cursor-pointer duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Report listing", RID);
                    setMoreClicked(false);
                  }}
                >
                  🚩 Report Listing
                </li>
                <li
                  className="hover:bg-[#cacaca] p-[5px] rounded-[5px] cursor-pointer duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(
                      window.location.origin + `/pg/${RID}`
                    );
                    setMoreClicked(false);
                  }}
                >
                  🔗 Copy Link
                </li>
                <li
                  className="hover:bg-[#cacaca] p-[5px] rounded-[5px] cursor-pointer duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    const shareUrl = `https://wa.me/?text=Check%20out%20this%20PG:%20${window.location.origin}/pg/${RID}`;
                    window.open(shareUrl, "_blank");
                    setMoreClicked(false);
                  }}
                >
                  📤 Share on WhatsApp
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
