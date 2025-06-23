import { useState } from "react";
import FindRoom from "../../sections/FindRoom.jsx";
import PgInfo from "../../sections/PgInfo.jsx";
import Navbar from "../../components/Navbar.jsx";

const Search = ({ cityName, nearbyPGs }) => {
  const [activeRID, setActiveRID] = useState(null);
  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute top-[1720px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <div className="absolute bottom-[-50px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute bottom-[-1000px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute bottom-[-2050px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>
      <div className="absolute top-[2820px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg3.png" alt="background" />
      </div>
      <Navbar />
      <FindRoom
        activeRID={activeRID}
        setActiveRID={setActiveRID}
        cityName={cityName}
        nearbyPGs={nearbyPGs}
      />
      {activeRID && <PgInfo RID={activeRID} />}
    </>
  );
};

export default Search;
