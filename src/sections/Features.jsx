import { landlordFeatureCards, tenantFeatureCards } from "../constants/Abt";
import { useMediaQuery } from "react-responsive";
import Cards from "../components/Cards";

const Features = () => {
  const isMedScreen = useMediaQuery({ maxWidth: 1800 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  return (
    <section id="features" className="relative pt-[100px] z-2">
      <div
        className={` flex flex-col ${
          isSmallScreen ? `gap-[75px]` : `gap-[150px]`
        }`}
      >
        <div className=" flex flex-col gap-0 items-center">
          <div
            className={` text-[#1a1a1a] ${
              isSmallScreen ? `text-[30px] font-medium` : `text-5xl font-medium`
            }`}
          >
            <span className="text-[#d72638]">RoomEase</span> For Tenants
          </div>
          <div
            className={`content-center   text-[#606060]  px-5 ${
              isSmallScreen
                ? `text-[11px] text-start mt-1`
                : `text-2xl font-medium text-center mt-4`
            }`}
          >
            {isSmallScreen ? (
              <p>
                <span className="text-[#d72638]">
                  Never get any cashback on paying rents ? Roomease got you ...
                </span>
                Now enjoy exciting cashback and exclusive rewards every time you
                pay your PG rent through RoomEase. Why just pay rent when you
                can save while doing it?
              </p>
            ) : (
              <p>
                Never get any
                <span className="text-[#d72638]">
                  cashback on paying rents ?
                </span>
                Roomease got you ...
              </p>
            )}
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
              isSmallScreen ? `text-[30px]` : `text-5xl`
            }`}
          >
            <span className="text-[#d72638]">RoomEase</span> For Landlords
          </div>
          <div
            className={`content-center   text-[#606060]  px-5 ${
              isSmallScreen
                ? `text-[11px] text-start mt-1`
                : `text-2xl font-medium text-center mt-4`
            }`}
          >
            {isSmallScreen ? (
              <p>
                <span className="text-[#d72638]">
                  Let’s create an online world of your business , with RoomEase
                </span>{" "}
                — from showcasing your PG to managing payments and building
                trust with verified listings, RoomEase helps you grow faster and
                smarter in the digital rental space.
              </p>
            ) : (
              <p>
                Let’s create an online world of your business , with
                <span className="text-[#d72638]">RoomEase</span>{" "}
              </p>
            )}
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
