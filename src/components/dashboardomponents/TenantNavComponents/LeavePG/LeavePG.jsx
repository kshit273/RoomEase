import React, { useState } from "react";
import Checkbox from "./Checkbox";

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

const LeavePG = () => {
  const pgName = "Sunlight PG";

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
    <div className="w-full flex flex-col gap-4 bg-[#d9d9d9] p-4 rounded-[20px]">
      <div className="p-2">
        <p className="text-[#d72638] text-[34px] font-medium">
          Leaving {pgName} ?
        </p>
      </div>
      <div className="flex gap-8 pl-2">
        <div className="flex items-center gap-4 ">
          <p className="text-[18px]">
            Security deposit collected ?{" "}
            <span className="text-[#d72638]">*</span>
          </p>
          <div className="pb-4">
            <Checkbox />
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <p className="text-[18px]">
            Complete rent paid ? <span className="text-[#d72638]">*</span>
          </p>
          <div className="pb-4">
            <Checkbox />
          </div>
        </div>
      </div>
      <div className="flex gap-4 bg-[#d9d9d9] rounded-[20px] p-4 justify-between w-full">
        {/* Left: Review Box */}
        <div className="flex flex-col bg-[#e1e1e1] p-6 rounded-[20px] shadow w-[450px]">
          <div className="w-full flex justify-center text-[22px] font-normal text-[#5c5c5c] mb-[20px]">
            <p>
              Provide Rating for {pgName}{" "}
              <span className="text-[#d72638]">*</span>
            </p>
          </div>

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

        {/* Right: Rating Section */}

        <div className="flex flex-col flex-1 rounded-[20px]">
          <textarea
            maxLength={2000}
            value={reviewText}
            onChange={handleTextChange}
            placeholder={`Tell us about your experience at ${pgName} ...`}
            className="w-full h-[450px] p-4 bg-[#e1e1e1] rounded-xl resize-none text-[#444] outline-none no-scrollbar"
          />
          <div className="flex justify-between mt-4">
            <div className="text-sm text-gray-500 ">
              {reviewText.length}/2000
            </div>
            <button className=" bg-[#d72638] text-white px-6 py-3 rounded-[10px] self-end cursor-pointer">
              Submit and Leave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeavePG;
