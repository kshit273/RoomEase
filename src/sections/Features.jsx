import { div } from "three/tsl";
import { landlordFeatureCards, tenantFeatureCards } from "../constants/Abt";
import { useMediaQuery } from "react-responsive";
import Cards from "../components/Cards";

const Features = () => {
  const isMedScreen = useMediaQuery({ maxWidth: 1800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  return (
    <section id="features" className="relative mt-[100px] z-2">
      <div
        className={`flex flex-col ${
          isSmallScreen ? `gap-[75px]` : `gap-[150px]`
        }`}
      >
        <div className="flex flex-col items-center">
          <div
            className={` font-medium text-[#1a1a1a] ${
              isSmallScreen ? `text-[25px]` : `text-5xl`
            }`}
          >
            <span className="text-[#d72638]">RoomEase</span> For Tenants
          </div>
          <div
            className={`content-center text-center font-medium text-[#8b8b8b] mt-4 px-5 ${
              isSmallScreen ? `text-[13px]` : `text-2xl`
            }`}
          >
            Never get any{" "}
            <span className="text-[#d72638]">cashback on paying rents ?</span>{" "}
            Roomease got you ...
          </div>
          <Cards
            cardList={tenantFeatureCards}
            isMedScreen={isMedScreen}
            isSmallScreen={isSmallScreen}
          />
        </div>
        <div className="flex flex-col items-center">
          <div
            className={` font-medium text-[#1a1a1a] ${
              isSmallScreen ? `text-[25px]` : `text-5xl`
            }`}
          >
            <span className="text-[#d72638]">RoomEase</span> For Landlords
          </div>
          <div
            className={`content-center text-center font-medium text-[#8b8b8b] mt-4 px-5 ${
              isSmallScreen ? `text-[13px]` : `text-2xl`
            }`}
          >
            Let’s create an online world of your business , with
            <span className="text-[#d72638]"> RoomEase</span>{" "}
          </div>
          <Cards
            cardList={landlordFeatureCards}
            isMedScreen={isMedScreen}
            isSmallScreen={isSmallScreen}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
