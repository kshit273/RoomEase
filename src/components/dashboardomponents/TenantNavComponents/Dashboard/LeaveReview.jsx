import React, { useState } from "react";

// Reusable star rating component
const StarRating = ({ label, rating, onRatingChange }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1); // index is 0-based
  };

  return (
    <div className="flex items-center justify-between bg-[#e1e1e1] rounded-full p-4  my-2 w-[400px]">
      <div className="flex items-center gap-2">
        <span className="text-gray-800 text-md font-normal">{label}</span>
      </div>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer text-2xl ${
              index < rating ? "text-orange-400" : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const LeaveReview = () => {
  const [ratings, setRatings] = useState({
    community: 4,
    value: 4,
    location: 4,
    food: 4,
    landlord: 4,
  });

  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (category, value) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className="flex gap-4  rounded-[20px] justify-between w-full">
      {/* Left: Review Box */}
      <div className="flex flex-col flex-1 bg-[#d7d7d7] p-6 rounded-[20px]">
        <p className="text-[#5c5c5c] text-[32px] font-medium mb-4">
          Leave a review
        </p>
        <textarea
          maxLength={2000}
          value={reviewText}
          onChange={handleTextChange}
          placeholder="type here ..."
          className="w-full h-[400px] p-4 bg-[#e2e2e2] rounded-xl resize-none text-[#444] outline-none no-scrollbar"
        />
        <div className="flex justify-between">
          <div className="text-sm text-gray-500 mt-4">
            {reviewText.length}/2000
          </div>
          <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full self-end">
            Submit
          </button>
        </div>
      </div>

      {/* Right: Rating Section */}
      <div className="flex flex-col bg-[#e8e8e8] p-6 rounded-[20px] shadow w-[450px]">
        <p className="text-[#5c5c5c] text-[30px] font-medium mb-4">
          Rate Sunlight PG
        </p>

        <StarRating
          label="Community and environment"
          rating={ratings.community}
          onRatingChange={(val) => handleRatingChange("community", val)}
        />
        <StarRating
          label="Value for money"
          rating={ratings.value}
          onRatingChange={(val) => handleRatingChange("value", val)}
        />
        <StarRating
          label="Location"
          rating={ratings.location}
          onRatingChange={(val) => handleRatingChange("location", val)}
        />
        <StarRating
          label="Food"
          rating={ratings.food}
          onRatingChange={(val) => handleRatingChange("food", val)}
        />
        <StarRating
          label="Landlord"
          rating={ratings.landlord}
          onRatingChange={(val) => handleRatingChange("landlord", val)}
        />
      </div>
    </div>
  );
};

export default LeaveReview;
