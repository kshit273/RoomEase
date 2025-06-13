import React, { useState } from "react";

const Like = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked ?? false);

  return (
    <button
      className="focus:outline-none relative w-[40px] h-[40px]"
      onClick={() => setLiked((prev) => !prev)}
      aria-label="Like"
      type="button"
    >
      <img
        src="/images/heart2.png"
        alt="like"
        className={`absolute inset-0 w-[40px] h-[40px] transition-opacity duration-150 ${
          liked ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/images/heart-full.png"
        alt="liked"
        className={`absolute inset-0 w-[40px] h-[40px] transition-opacity duration-150 ${
          liked ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default Like;
