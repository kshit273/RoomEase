import { useNavigate } from "react-router-dom";
import RoomCard from "./RoomCard";

const SearchResultsList = ({ search_keyword, list, onRoomClick }) => {
  const navigate = useNavigate();

  const handleCardClick = (RID) => {
    navigate(`/pg/${RID}`);
  };
  return (
    <div className="mt-[50px] w-[90%] flex justify-center">
      <div>
        <div className="text-[25px] font-medium text-[#1a1a1a] mb-[20px]">
          Search results for : {search_keyword}
        </div>
        <div className="grid grid-cols-5 grid-rows-auto gap-[20px]">
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
      </div>
    </div>
  );
};

export default SearchResultsList;
