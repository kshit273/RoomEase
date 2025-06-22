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
    console.log(pgTypeMap);

    const filtered = Houses.filter(
      (pg) => pgTypeMap[pg.RID] === gender.toLowerCase()
    );
    console.log(filtered);

    return filtered;
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
              list={nearbyPGs}
              heading={`Top rated in ${cityName ? `${cityName}` : ""}`}
              onRoomClick={setActiveRID}
            />
          )}

          <RoomSlider
            list={Houses.filter(
              (pg) => pg.isVerified == 1 && pg.RID.startsWith("DEH")
            )}
            heading="Verified By RoomEase"
            onRoomClick={setActiveRID}
          />

          {nearbyPGs.length > 0 && (
            <RoomSlider
              list={nearbyPGs}
              heading={`Popular in ${cityName ? `${cityName}` : ""}`}
              onRoomClick={setActiveRID}
            />
          )}

          <RoomSlider
            list={Houses.filter((pg) => pg.RID.startsWith("NOI"))}
            heading="Rooms in Noida"
            onRoomClick={setActiveRID}
          />

          <RoomSlider
            list={filterPGsByGender("girls")}
            heading="Rooms for Girls"
            onRoomClick={setActiveRID}
          />
        </div>
      </div>
    </section>
  );
};

export default FindRoom;
