import { useState } from "react";
import { PGReviews } from "../constants/Reviews";
import RoomReviewCard from "./RoomReviewCard";

const PgReview = ({ RID }) => {
  const reviewsForPG = PGReviews.filter((review) => review.RID === RID);
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviewsForPG : reviewsForPG.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center pt-[100px]">
      <div className="head">
        <p className="text-[45px] font-medium mb-[30px]">
          What others say about this place
        </p>
      </div>
      <div className="pict flex gap-[30px] items-center">
        <div className="finRating flex flex-col items-center justify-center gap-[10px] ">
          <p className="text-[20px] text-[#464646] ">Overall rating</p>
          <div className="text-[#464646] text-[50px] font-medium">4.1</div>
          <img src="./images/finRating.png" alt="" className="w-[100px]" />
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="env flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">
            Community and environment
          </p>
          <img src="./images/group.png" alt="" className="h-[60px] w-[60px]" />
          <div className="text-[#464646] text-[20px] font-medium">4.1</div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="val flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Value for money</p>
          <img
            src="./images/bar-chart.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">4.1</div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="location flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Location</p>
          <img
            src="./images/finLocation.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">4.1</div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="food flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Food</p>
          <img
            src="./images/spatula.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">4.1</div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="landlord flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Landlord</p>
          <img
            src="./images/finUser.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">4.1</div>
        </div>
      </div>
      <div className="cards grid grid-cols-2 gap-x-[20px] gap-y-[20px] auto-rows-auto mt-[30px]">
        {visibleReviews.map((review, idx) => (
          <RoomReviewCard
            username={review.username}
            date={review.date}
            rating={review.finalRating}
            review={review.review}
            key={idx}
          />
        ))}
      </div>
      {showAll ? null : (
        <div className="relative bottom-[60px] w-full h-[60px] bg-gradient-to-b from-transparent to-[#e8e8e8] pointer-events-none"></div>
      )}
      <div className="flex items-start">
        {" "}
        {reviewsForPG.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-[20px] px-6 py-3 bg-[#d7d7d7] text-[#1a1a1a] text-[18px] cursor-pointer font-medium rounded-[10px] hover:bg-[#d72638] hover:text-[#e3e3e3] transition-all duration-220"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default PgReview;
