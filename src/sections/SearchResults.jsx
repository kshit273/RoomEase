import { useParams } from "react-router-dom";
import { Details } from "../constants/PgData";
import { Houses } from "../constants/Houses";
import { useEffect, useState } from "react";
import PremiumRoomSlider from "../components/PremiumRoomSlider";
import SearchButton from "../components/SearchButton";
import Navbar from "../components/Navbar";
import SearchResultsList from "../components/SearchResultsList";
import NoSearchOutput from "../components/NoSearchOutput";
import { useMediaQuery } from "react-responsive";

const SearchResults = ({ setActiveRID }) => {
  const isMedScreen = useMediaQuery({ minWidth: 801, maxWidth: 1024 });
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const { search_keyword } = useParams();
  const [results, setResults] = useState([]);

  function sortScore(list) {
    return list
      .map((pg) => {
        const verifiedPoints = pg.isVerified ? 25 : 0;
        const ratingPoints = Math.min(
          (pg.review ?? pg.Rooms?.[0]?.Rating ?? 0) * 10,
          50
        );
        const totalPoints = verifiedPoints + ratingPoints;
        return { ...pg, score: totalPoints };
      })
      .sort((a, b) => b.score - a.score);
  }

  useEffect(() => {
    if (!search_keyword) return;

    const cityList = [
      "dehradun",
      "delhi",
      "noida",
      "gurgaon",
      "ghaziabad",
      "meerut",
    ];
    const detectedCity = cityList.find((city) =>
      search_keyword.toLowerCase().includes(city)
    );

    // Merge Details and Houses using RID
    const mergedList = Details.map((detailPg) => {
      const houseInfo = Houses.find((h) => h.RID === detailPg.RID);
      if (!houseInfo) return null;

      return {
        ...detailPg,
        ...houseInfo,
        keywords: [
          ...(detailPg.Address?.split(/[ ,]+/) || []),
          detailPg.PgName,
          detailPg.Landmark,
          detailPg.PgType,
          detailPg.RID,
          ...(detailPg.PgType?.toLowerCase() === "gents"
            ? ["boys", "male"]
            : []),
          ...(detailPg.PgType?.toLowerCase() === "girls"
            ? ["girls", "female"]
            : []),
        ],
        allRoomFeatures:
          detailPg.Rooms?.flatMap((r) => r.features || []).join(" ") || "",
        allRoomRents:
          detailPg.Rooms?.map((r) => String(r.Rent)).join(" ") || "",
      };
    }).filter(Boolean);

    // Strict city filtering
    const filteredByCity = detectedCity
      ? mergedList.filter((pg) =>
          pg.Address?.toLowerCase().includes(detectedCity)
        )
      : mergedList;

    const searchWords = search_keyword.trim().toLowerCase().split(/\s+/);

    const scoredResults = filteredByCity.map((pg) => {
      const lowerName = pg.PgName?.toLowerCase() || "";
      const lowerAddress = pg.Address?.toLowerCase() || "";
      const lowerLandmark = pg.Landmark?.toLowerCase() || "";
      const lowerType = pg.PgType?.toLowerCase() || "";
      const fullText = `${lowerName} ${lowerAddress} ${lowerLandmark}`;

      let score = 0;

      // Boost for full phrase match
      if (fullText.includes(search_keyword.toLowerCase())) {
        score += 100;
      }

      searchWords.forEach((word) => {
        if (lowerName.includes(word)) score += 50; // More weight to PgName
        if (lowerAddress.includes(word)) score += 30;
        if (lowerLandmark.includes(word)) score += 20;

        if (
          [
            "dehradun",
            "delhi",
            "noida",
            "gurgaon",
            "ghaziabad",
            "meerut",
          ].includes(word) &&
          lowerAddress.includes(word)
        )
          score += 30;

        if (
          (word === "boys" || word === "gents" || word === "male") &&
          lowerType === "gents"
        )
          score += 20;

        if ((word === "girls" || word === "female") && lowerType === "girls")
          score += 20;

        if (word === "pg" || word === "hostel") score += 10;
      });

      score += pg.isPremium ? 30 : 0;
      score += (pg.Rooms?.[0]?.Rating || 0) * 10;

      return { ...pg, score };
    });

    const finalSortedResults = scoredResults
      .filter((pg) => {
        // Require a higher score
        // if (pg.score < 50) return false;
        // Require at least one strong match
        const keyword = search_keyword.toLowerCase();
        return (
          pg.PgName?.toLowerCase().includes(keyword) ||
          pg.Address?.toLowerCase().includes(keyword) ||
          pg.Landmark?.toLowerCase().includes(keyword)
        );
      })
      .sort((a, b) => b.score - a.score);

    setResults(finalSortedResults);
  }, [search_keyword]);

  const premiumHouses = results.filter((pg) => pg.isPremium);

  return (
    <>
      <div className="absolute top-[-20px] left-[-20px] z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute bottom-[-250px] right-0 z-1 md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>

      <Navbar />
      <section
        className={`relative z-2 ${isSmallScreen ? `pt-[60px]` : `pt-[100px]`}`}
      >
        <div
          className={`w-full flex justify-center ${
            isSmallScreen || isMedScreen ? ` mt-[20px]` : ` mt-[100px]`
          }`}
        >
          <div className="w-[90%] h-full pb-[40px] bg-[#dadada] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center">
            {/* Search bar & icon buttons */}
            <div
              className={`flex items-center w-full ${
                isSmallScreen || isMedScreen
                  ? `my-[20px] px-[10px]`
                  : `my-[40px] px-[40px]`
              } justify-between`}
            >
              <div
                className={`flex-1 flex justify-center ${
                  isMedScreen ? `scale-70` : `scale-100`
                }`}
              >
                <SearchButton
                  width={isSmallScreen ? 200 : isMedScreen ? 600 : 1000}
                />
              </div>
              <div
                className={`flex ${
                  isSmallScreen ? `gap-[5px]` : `gap-[20px]`
                } justify-end`}
                style={{ minWidth: isSmallScreen ? 90 : 170 }}
              >
                <button>
                  <div
                    className={`${
                      isSmallScreen ? `h-[30px] w-[30px]` : `h-[50px] w-[50px]`
                    } bg-[#e8e8e8] rounded-full`}
                  ></div>
                </button>
                {!isSmallScreen && !isMedScreen ? (
                  <button>
                    <div
                      className={`${
                        isSmallScreen
                          ? `h-[30px] w-[30px]`
                          : `h-[50px] w-[50px]`
                      } bg-[#e8e8e8] rounded-full`}
                    ></div>
                  </button>
                ) : null}
                {!isSmallScreen && !isMedScreen ? (
                  <button>
                    <div
                      className={`${
                        isSmallScreen
                          ? `h-[30px] w-[30px]`
                          : `h-[50px] w-[50px]`
                      } bg-[#e8e8e8] rounded-full`}
                    ></div>
                  </button>
                ) : null}
              </div>
            </div>

            {/* Premium PGs slider */}
            <div className="bg-[#2b2b2b] rounded-[20px] w-[95%] mx-[10px]">
              <div
                className={`w-[90%] ${
                  isSmallScreen
                    ? `ml-[20px]`
                    : isMedScreen
                    ? `ml-[30px]`
                    : `ml-[90px]`
                } `}
              >
                {premiumHouses.length > 0 && (
                  <PremiumRoomSlider
                    list={premiumHouses}
                    onRoomClick={setActiveRID}
                    desc={
                      "Here is the list of PGs in this area, verified and recommended by RoomEase"
                    }
                  />
                )}
              </div>
            </div>

            <div
              className={`w-[90%] h-[1px] bg-[#b3b3b3] ${
                isSmallScreen ? `mt-[20px]` : `mt-[80px]`
              } `}
            ></div>

            {/* Full results list */}
            {results.filter((pg) => !pg.isPremium).length > 0 && (
              <SearchResultsList
                search_keyword={search_keyword}
                list={sortScore(results.filter((pg) => !pg.isPremium))}
                onRoomClick={setActiveRID}
              />
            )}

            {/* Fallback */}
            {results.length === 0 && <NoSearchOutput />}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchResults;
