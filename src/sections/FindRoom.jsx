import RoomSlider from "../components/RoomSlider";
import SearchButton from "../components/SearchButton";
import { Houses } from "../constants/Houses";
import { Details } from "../constants/PgData";

const FindRoom = ({ activeRID, setActiveRID, nearbyPGs, cityName }) => {
  function filterPGsByGender(gender) {
    const pgTypeMap = {};
    Details.forEach((pg) => {
      pgTypeMap[pg.RID] = pg.PgType.toLowerCase();
    });

    const filtered = Houses.filter(
      (pg) => pgTypeMap[pg.RID] === gender.toLowerCase()
    );

    return filtered;
  }

  function sortScore(list) {
    const PGs = list
      .map((pg) => {
        const verifiedPoints = pg.isVerified ? 25 : 0;
        const ratingPoints = Math.min(pg.review * 10, 50);
        const totalPoints = verifiedPoints + ratingPoints;

        return { ...pg, score: totalPoints };
      })
      .sort((a, b) => b.score - a.score);

    return PGs;
  }

  return (
    <section id="about" className="relative z-2 pt-[100px]">
      <div className="w-full flex justify-center mt-[100px]">
        <div className="w-[90%] h-full pb-[40px] bg-[#dadada] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center">
          <div className="flex flex-col items-center mt-[100px] gap-[50px]">
            <div className="flex justify-center text-center">
              <p className="w-[80%] text-[#1a1a1a] text-[80px] font-medium">
                Discover <span className="text-[#d72638]">rooms</span> in
                seconds without leaving your couch!
              </p>
            </div>
            <div className="w-[100%] flex justify-center mb-[100px] mt-[30px]">
              <SearchButton width={800} />
            </div>
          </div>
          {nearbyPGs.length > 0 && (
            <RoomSlider
              list={sortScore(nearbyPGs)}
              heading={`Top rated in ${cityName ? `${cityName}` : ""}`}
              onRoomClick={setActiveRID}
              desc={
                "Find Dehradun’s highest-rated PGs, trusted by students and working professionals alike."
              }
            />
          )}

          <RoomSlider
            list={sortScore(Houses).filter(
              (pg) => pg.isVerified == 1 && pg.RID.startsWith("DEH")
            )}
            heading="Verified By RoomEase"
            onRoomClick={setActiveRID}
            desc={
              "Stay stress-free with PGs officially verified for quality, comfort, and trust by RoomEase."
            }
          />

          {nearbyPGs.length > 0 && (
            <RoomSlider
              list={sortScore(nearbyPGs)}
              heading={`Popular in ${cityName ? `${cityName}` : ""}`}
              onRoomClick={setActiveRID}
              desc={
                "These PGs are trending! Most viewed, most loved, and highly recommended by locals."
              }
            />
          )}

          <RoomSlider
            list={sortScore(Houses).filter((pg) => pg.RID.startsWith("NOI"))}
            heading="Rooms in Noida"
            onRoomClick={setActiveRID}
            desc={
              "Explore handpicked rooms in Noida, perfect for techies, interns, and students."
            }
          />

          <RoomSlider
            list={sortScore(Houses).filter((pg) => pg.RID.startsWith("GUR"))}
            heading="Rooms in Gurugram"
            onRoomClick={setActiveRID}
            desc={
              "Explore handpicked rooms in Gurugram, perfect for techies, interns, and students."
            }
          />

          <RoomSlider
            list={sortScore(Houses).filter((pg) => pg.RID.startsWith("DEL"))}
            heading="Rooms in Delhi"
            onRoomClick={setActiveRID}
            desc={
              "Explore handpicked rooms in Delhi, perfect for techies, interns, and students."
            }
          />

          <RoomSlider
            list={sortScore(filterPGsByGender("girls"))}
            heading="Rooms for Girls"
            onRoomClick={setActiveRID}
            desc={
              "Safe, secure, and convenient PGs tailored specifically for girl students and working women."
            }
          />

          <RoomSlider
            list={sortScore(filterPGsByGender("boys"))}
            heading="Rooms for Boys"
            onRoomClick={setActiveRID}
            desc={
              "Safe, secure, and convenient PGs tailored specifically for boy students and working men."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FindRoom;
