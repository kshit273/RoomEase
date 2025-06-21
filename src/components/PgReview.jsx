import { useState } from "react";
import { PGReviews } from "../constants/Reviews";
import RoomReviewCard from "./RoomReviewCard";

const PgReview = ({ RID }) => {
  const reviewsForPG = PGReviews.filter((review) => review.RID === RID);
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviewsForPG : reviewsForPG.slice(0, 4);

  let communityAndEnvironmentRating = 0;
  let valueForMoneyRating = 0;
  let locationRating = 0;
  let foodRating = 0;
  let landlordRating = 0;

  if (reviewsForPG.length > 0) {
    const totalcommunityAndEnvironmentRating = reviewsForPG.reduce(
      (sum, review) => sum + review.communityAndEnvironmentRating,
      0
    );
    const totalvalueForMoneyRating = reviewsForPG.reduce(
      (sum, review) => sum + review.valueForMoneyRating,
      0
    );
    const totallocationRating = reviewsForPG.reduce(
      (sum, review) => sum + review.locationRating,
      0
    );
    const totalfoodRating = reviewsForPG.reduce(
      (sum, review) => sum + review.foodRating,
      0
    );
    const totallandlordRating = reviewsForPG.reduce(
      (sum, review) => sum + review.landlordRating,
      0
    );

    communityAndEnvironmentRating =
      Math.round(
        (totalcommunityAndEnvironmentRating / reviewsForPG.length) * 10
      ) / 10;
    valueForMoneyRating =
      Math.round((totalvalueForMoneyRating / reviewsForPG.length) * 10) / 10;
    locationRating =
      Math.round((totallocationRating / reviewsForPG.length) * 10) / 10;
    foodRating = Math.round((totalfoodRating / reviewsForPG.length) * 10) / 10;
    landlordRating =
      Math.round((totallandlordRating / reviewsForPG.length) * 10) / 10;
  }

  let finRating =
    Math.round(
      ((communityAndEnvironmentRating +
        valueForMoneyRating +
        locationRating +
        foodRating +
        landlordRating) /
        5) *
        10
    ) / 10;

  const getTimeAgo = (dateString) => {
    const now = new Date();
    const reviewDate = new Date(dateString);
    const diffInMs = now - reviewDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "today";
    if (diffInDays === 1) return "yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? "a week ago" : `${weeks} weeks ago`;
    }
    if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? "a month ago" : `${months} months ago`;
    }

    const years = Math.floor(diffInDays / 365);
    return years === 1 ? "a year ago" : `${years} years ago`;
  };

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
          <div className="text-[#464646] text-[50px] font-medium">
            {finRating}
          </div>
          <img src="./images/finRating.png" alt="" className="w-[100px]" />
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="env flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">
            Community and environment
          </p>
          <img src="/images/group.png" alt="" className="h-[60px] w-[60px]" />
          <div className="text-[#464646] text-[20px] font-medium">
            {communityAndEnvironmentRating}
          </div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="val flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Value for money</p>
          <img
            src="/images/bar-chart.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">
            {valueForMoneyRating}
          </div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="location flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Location</p>
          <img
            src="/images/finLocation.png"
            alt=""
            className="h-[60px] w-[60px]"
          />
          <div className="text-[#464646] text-[20px] font-medium">
            {locationRating}
          </div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="food flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Food</p>
          <img src="/images/spatula.png" alt="" className="h-[60px] w-[60px]" />
          <div className="text-[#464646] text-[20px] font-medium">
            {foodRating}
          </div>
        </div>

        <div className="h-[80px] w-[1px] bg-[#c4c4c4]"></div>

        <div className="landlord flex flex-col items-center justify-center gap-[10px]">
          <p className="text-[20px] text-[#464646]">Landlord</p>
          <img src="/images/finUser.png" alt="" className="h-[60px] w-[60px]" />
          <div className="text-[#464646] text-[20px] font-medium">
            {landlordRating}
          </div>
        </div>
      </div>
      <div className="cards grid grid-cols-2 gap-x-[20px] gap-y-[20px] auto-rows-auto mt-[30px]">
        {visibleReviews.map((review, idx) => (
          <RoomReviewCard
            username={review.username}
            date={getTimeAgo(review.date)}
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
