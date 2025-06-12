import Verified from "./Verified";
import Like from "./Like";
import Favourite from "./Favourite";

const RoomCard = ({ head, imgPath, desc, isVerified, isFav }) => {
  return (
    <div className="h-[230px] w-[200px] bg-[#d7d7d7] rounded-[10px]">
      <div className="h-[150px] w-[200px] flex items-center justify-center relative">
        {/* Verified icon at top-left */}
        <div className="absolute top-[10px] left-[10px] z-10 flex gap-[5px]">
          {isVerified ? <Verified /> : null}
        </div>
        {/* Like icon at top-right */}
        <div className="absolute top-[8px] right-[8px] z-10">
          <Like />
        </div>
        <img
          src={imgPath}
          alt=""
          className="rounded-[10px] w-[190px] h-[140px]"
        />
      </div>
      <div className="mx-[10px] my-[5px]">
        <p className="text-[13px] font-medium text-[#1a1a1a]">{head}</p>
        <p className="text-[9px] text-[#919191]">{desc}</p>
      </div>
    </div>
  );
};

export default RoomCard;
