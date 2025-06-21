import { Users } from "../constants/Users";

const RoomReviewCard = ({ username, date, rating, review }) => {
  const User = Users.find((user) => user.username === username);

  if (!User) return null;

  return (
    <div className="h-[380px] w-[700px] bg-[#d7d7d7] rounded-[20px] p-[25px]">
      <div className="top flex gap-[20px]">
        <div className="left">
          <img
            src={
              User.imgPath.startsWith("./")
                ? User.imgPath.replace("./", "/")
                : User.imgPath
            }
            alt=""
            className="h-[90px] w-[90px] rounded-full"
          />
        </div>
        <div className="right flex flex-col gap-0">
          <p className="text-[23px] font-medium text-[#1a1a1a]">{username}</p>
          <p className="text-[16px] font-medium text-[#565656]">{date}</p>
          <div className="stars flex items-center gap-1  pt-[5px]">
            {[...Array(5)].map((_, i) =>
              i < Math.round(rating) ? (
                <img
                  key={i}
                  src="/images/star-filled.png"
                  alt="star"
                  className="w-[18px] h-[18px]"
                />
              ) : (
                <img
                  key={i}
                  src="/images/star-empty.png"
                  alt="star-empty"
                  className="w-[18px] h-[18px]"
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="bottom text-[20px] py-[20px] text-[#464646] font-medium">
        {review}
      </div>
    </div>
  );
};

export default RoomReviewCard;
