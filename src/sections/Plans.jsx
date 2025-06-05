import { useMediaQuery } from "react-responsive";
import PlanCard from "../components/PlanCard";
import { basicList, popularList, premiumList } from "../constants/Abt";

const Plans = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  return (
    <section id="plans" className="relative mt-[200px] z-2">
      <div className="flex flex-col items-center ">
        <div
          className={` font-medium text-[#1a1a1a] ${
            isSmallScreen ? `text-[25px]` : `text-5xl`
          }`}
        >
          Plans and pricing
        </div>
        <div
          className={`text-[#d72638] content-center text-center font-medium  mt-4 px-5 ${
            isSmallScreen ? `text-[13px]` : `text-2xl`
          }`}
        >
          (for Landlords)
        </div>
        <div
          className={`content-center text-center font-medium text-[#8b8b8b] mt-1 px-5 ${
            isSmallScreen ? `text-[13px]` : `text-2xl`
          }`}
        >
          Choose the plan that best aligns with your needs
        </div>
      </div>
      <div className="flex justify-center items-center  gap-[50px] pt-[50px]">
        <div className="transform scale-90 hover:scale-95 transition duration-1500">
          <PlanCard
            title={"Basic"}
            price={"0"}
            list={basicList}
            priBg={"#d9d9d9"}
            secBg={"#1a1a1a"}
            line={"./images/b-line.png"}
          />
        </div>
        <div>
          <PlanCard
            title={"Popular"}
            price={"10"}
            list={popularList}
            priBg={"#dfd0d0"}
            secBg={"#d72638"}
            line={"./images/r-line.png"}
          />
        </div>
        <div className="transform scale-90 hover:scale-95 transition duration-1500 ">
          <PlanCard
            title={"Premium"}
            price={"25"}
            list={premiumList}
            priBg={"#1a1a1a"}
            secBg={"#d9d9d9"}
            line={"./images/w-line.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Plans;
