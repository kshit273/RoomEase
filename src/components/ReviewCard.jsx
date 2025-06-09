import { useMediaQuery } from "react-responsive";

const ReviewCard = ({ card }) => {
  const isMedScreen = useMediaQuery({ minWidth: 768, maxWidth: 1400 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={` ${
        isSmallScreen ? `h-[280px] w-[380px]` : `h-[380px] w-[650px]`
      } bg-[#d9d9d9] rounded-[10px] flex-col px-[20px] py-[20px] mb-[10px]`}
    >
      <div className={`${isSmallScreen ? `ml-0` : `ml-[10px]`} flex `}>
        <div
          className={`${
            isSmallScreen
              ? `h-[50px] w-[50px] mt-0`
              : `h-[80px] w-[80px] mt-[10px]`
          }  `}
        >
          <img src={card.image} alt={card.user} className="rounded-full" />
        </div>
        <div
          className={`${
            isSmallScreen ? `mt-0 pl-[10px]` : `mt-[10px] pl-[20px]`
          }  `}
        >
          <div
            className={`${
              isSmallScreen ? `text-[15px]` : `text-[27px]`
            }  font-medium`}
          >
            {card.user}
          </div>
          <div
            className={`${
              isSmallScreen ? `text-[12px]` : `text-[20px]`
            } font-[#626262]`}
          >
            {card.link}
          </div>
        </div>
      </div>
      <div
        className={`${
          isSmallScreen ? `mt-[20px] text-[12px]` : `mt-[20px] text-[19px]`
        } `}
      >
        <p>{card.review}</p>
      </div>
      <div
        className={`${
          isSmallScreen ? ` h-[20px] w-[20px]` : ` h-[40px] w-[40px]`
        } mt-[15px] flex gap-[5px]`}
      >
        {[...Array(card.stars || 1)].map((_, idx) => (
          <img
            key={idx}
            src="./images/yellowstar.png"
            alt="star"
            className={
              isSmallScreen ? `h-[20px] w-[20px]` : `h-[40px] w-[40px]`
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
