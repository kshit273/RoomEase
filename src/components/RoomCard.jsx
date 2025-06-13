import Verified from "./Verified";
import Like from "./Like";

const RoomCard = ({ head, imgPath, desc, isVerified, isLiked }) => {
  return (
    <div className="h-[500px] w-[500px] bg-[#cecece] rounded-[10px]">
      <div className="h-[370px] w-[500px] flex items-center justify-center relative">
        {/* Verified icon at top-left */}
        <div className="absolute top-[15px] left-[10px] z-10 flex gap-[5px]">
          {isVerified ? <Verified /> : null}
        </div>
        {/* Like icon at top-right */}
        <div className="absolute top-[15px] right-[20px] z-10">
          <Like isLiked={isLiked} />
        </div>
        <img
          src={imgPath}
          alt=""
          className="rounded-[10px] w-[480px] h-[360px]"
        />
      </div>
      <div className="mx-[10px] my-[8px]">
        <p className="text-[28px] font-medium text-[#1a1a1a]">{head}</p>
        <p className="text-[23px] text-[#919191]">{desc}</p>
      </div>
    </div>
  );
};

export default RoomCard;
