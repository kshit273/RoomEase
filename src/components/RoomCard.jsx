import Verified from "./Verified";
import Like from "./Like";

const RoomCard = ({
  RID,
  head,
  imgPath,
  desc,
  isVerified,
  isLiked,
  review,
}) => {
  return (
    <div className="h-[355px] w-[400px] bg-[#cecece] rounded-[10px]">
      <div className="h-[275px] w-[400px] flex items-center justify-center relative">
        <div className="absolute top-[15px] left-[10px] z-10 flex gap-[5px]">
          {isVerified ? <Verified /> : null}
        </div>
        <div className="absolute top-[15px] right-[20px] z-10">
          <Like isLiked={isLiked} />
        </div>
        <img
          src={imgPath}
          alt=""
          className="rounded-[10px] w-[380px] h-[260px]"
        />
      </div>
      <div className="mx-[10px] ">
        <p className="text-[22px] font-medium text-[#1a1a1a]">{head}</p>
        <p className="text-[17px] text-[#919191]">{desc}</p>
      </div>
      <div className="mx-[10px] flex items-center gap-1">
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
  );
};

export default RoomCard;
