const Cards = ({ cardList, isMedScreen, isSmallScreen }) => {
  return (
    <div
      className={` flex  ${isMedScreen ? "flex-wrap justify-center" : ""} ${
        isSmallScreen ? `gap-[30px] mt-[40px]` : `gap-[70px] mt-[70px]`
      }`}
    >
      {cardList.map((card, idx) => (
        <div
          key={idx}
          className={`${
            isSmallScreen ? `h-[175px] w-[175px]` : `h-[275px] w-[325px]`
          } flex flex-col bg-[#1a1a1a]  rounded-[10px]`}
        >
          <div className="flex items-center justify-center h-[200px]">
            <img
              src={card.img}
              alt="card-img"
              className={isSmallScreen ? `h-[60px]` : `h-[100px]`}
            />
          </div>
          <div
            className={`${
              isSmallScreen ? `text-[10px] pb-5` : `text-xl `
            } text-[#d9d9d9]  px-5`}
          >
            <p className="content-center text-center">
              {card.titleStart}
              <span className="text-[#bd2332]">{card.titleMid}</span>
              {card.titleEnd}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
