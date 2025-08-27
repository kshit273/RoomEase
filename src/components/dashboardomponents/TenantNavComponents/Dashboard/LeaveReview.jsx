import React, { useState } from "react";

// Reusable star rating component
const StarRating = ({ label, rating, onRatingChange }) => {
  const handleClick = (index) => {
    onRatingChange(index + 1); // index is 0-based
  };

  return (
    <div className="flex items-center justify-between rounded-full p-4 my-2 w-[400px]">
      <div className="flex items-center gap-2">
        {/* You can add icons based on label if needed */}
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
    <div className="flex gap-4 bg-[#d9d9d9] p-4 rounded-[20px] justify-between w-full">
      {/* Left: Review Box */}
      <div className="flex flex-col flex-1 bg-[#e6e6e6] p-6 rounded-[20px]">
        <p className="text-[#2d2d2d] text-[32px] font-medium mb-4">
          Leave a review
        </p>
        <textarea
          maxLength={2000}
          value={reviewText}
          onChange={handleTextChange}
          placeholder="type here ..."
          className="w-full h-[400px] p-4 bg-[#d9d9d9] rounded-xl resize-none text-[#444] outline-none no-scrollbar"
        />
        <div className="text-sm text-gray-500 mt-1">
          {reviewText.length}/2000
        </div>
        <button className="mt-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full self-end">
          Submit
        </button>
      </div>

      {/* Right: Rating Section */}
      <div className="flex flex-col bg-[#e6e6e6] p-6 rounded-[20px] shadow w-[450px]">
        <p className="text-[#2d2d2d] text-[30px] font-medium mb-4">
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
