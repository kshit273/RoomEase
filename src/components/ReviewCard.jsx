const ReviewCard = ({ card }) => {
  return (
    <div className="h-[380px] w-[650px] bg-[#d9d9d9] rounded-[10px] flex-col px-[20px] py-[20px] mb-[10px]">
      <div className="flex ml-[10px]">
        <div className="h-[80px] w-[80px] mt-[10px]">
          <img src={card.image} alt={card.user} className="rounded-full" />
        </div>
        <div className="pl-[20px] mt-[10px]">
          <div className="text-[27px] font-medium">{card.user}</div>
          <div className="text-[20px] font-[#626262]">{card.link}</div>
        </div>
      </div>
      <div className="mt-[20px] text-[19px]">
        <p>{card.review}</p>
      </div>
      <div className="h-[40px] w-[40px] mt-[15px] flex gap-[5px]">
        {[...Array(card.stars || 1)].map((_, idx) => (
          <img
            key={idx}
            src="./images/yellowstar.png"
            alt="star"
            className="h-[40px] w-[40px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
