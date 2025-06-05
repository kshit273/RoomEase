import { premiumList } from "../constants/Abt";

const PlanCard = ({ title, price, list, priBg, secBg, line }) => {
  return (
    <div
      style={{ background: priBg }}
      className={`h-[885px] w-[600px] rounded-[10px]`}
    >
      <div
        style={{ color: secBg }}
        className="flex items-center justify-center pt-[70px] pb-[0px] font-medium text-[40px]"
      >
        {title}
      </div>
      <div
        style={{ color: secBg }}
        className="flex items-center justify-center font-medium text-[130px]"
      >
        {price}%
      </div>
      <div
        style={{ color: secBg }}
        className="flex items-center justify-center pb-[50px] font-medium text-[25px] mt-[-25px]"
      >
        per month
      </div>
      <div className="px-[70px]">
        <img src={line} alt="line" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-[12px] pt-[40px] ">
          {premiumList.map((item, idx) => (
            <div className="flex gap-[60px]">
              <div
                key={idx}
                style={{ color: "#747474" }}
                className="text-[19px] w-[400px]"
              >
                {item}
              </div>
              <div className="h-[30px] w-[30px]">
                {list.includes(item) ? (
                  <img src="./images/check.png" alt="tick"></img>
                ) : (
                  <img src="./images/close.png" alt="cross"></img>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center pt-[55px]">
        <button
          style={{ background: secBg, color: priBg }}
          className="transform h-[65px] w-[210px] rounded-full text-[20px] font-medium hover:scale-105 transition duration-500"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
