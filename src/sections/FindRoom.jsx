import RoomSlider from "../components/RoomSlider";
import SearchButton from "../components/SearchButton";
import { Houses } from "../constants/Houses";

const FindRoom = ({ activeRID, setActiveRID }) => {
  return (
    <section id="about" className="relative z-2 pt-[100px]">
      <div className="w-full h-[2700px] flex justify-center mt-[100px]">
        <div className="w-[80%] h-full bg-[#dadada] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center">
          <div className="flex flex-col items-center mt-[100px] gap-[50px]">
            <div className="flex justify-center text-center">
              <p className="w-[80%]  text-[#1a1a1a] text-[80px] font-medium">
                Discover<span className="text-[#d72638]"> rooms </span> in
                seconds without leaving your couch!
              </p>
            </div>
            <div className="w-[100%] flex justify-center mb-[100px] mt-[30px]">
              <SearchButton width={800} />
            </div>
          </div>
          <RoomSlider
            list={Houses}
            heading={"Rooms in Dehradun"}
            onRoomClick={setActiveRID}
          />
          <RoomSlider
            list={Houses}
            heading={"PGs in your area"}
            onRoomClick={setActiveRID}
          />
          <RoomSlider
            list={Houses}
            heading={"You may also like"}
            onRoomClick={setActiveRID}
          />
        </div>
      </div>
    </section>
  );
};

export default FindRoom;
