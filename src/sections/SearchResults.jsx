import { useParams } from "react-router-dom";
import { Details } from "../constants/PgData";
import { Houses } from "../constants/Houses";
import { useEffect, useState } from "react";
import RoomSlider from "../components/RoomSlider";
import SearchButton from "../components/SearchButton";
import Fuse from "fuse.js";

const SearchResults = ({ setActiveRID }) => {
  const { search_keyword } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!search_keyword) return;

    // Flatten Details to include room features and price for searching
    const searchableList = Details.map((pg) => ({
      ...pg,
      keywords: [
        ...pg.Address.split(/[ ,]+/), // split address into words
        pg.PgName,
        pg.Landmark,
        pg.PgType,
        pg.RID,
      ],
      // Combine all room features and rents into strings for searching
      allRoomFeatures:
        pg.Rooms?.flatMap((r) => r.features || []).join(" ") || "",
      allRoomRents: pg.Rooms?.map((r) => r.Rent).join(" ") || "",
    }));

    const options = {
      includeScore: true,
      threshold: 0.4,
      keys: [
        "PgName",
        "head",
        "Address",
        "Landmark",
        "PgType",
        "RID",
        "Rooms.Rent",
        "allRoomFeatures",
        "allRoomRents",
        "keywords",
      ],
    };

    const combinedArray = [...searchableList, ...Houses];
    const fuse = new Fuse(combinedArray, options);
    const filtered = fuse
      .search(search_keyword)
      .map((result) => result.item.RID);

    // Get corresponding elements from Houses with those RIDs
    const matchedHouses = Houses.filter((house) =>
      filtered.includes(house.RID)
    );
    setResults(matchedHouses);
  }, [search_keyword]);

  return (
    <section id="about" className="relative z-2 pt-[100px]">
      <div className="w-full flex justify-center mt-[100px]">
        <div className="w-[90%] h-full pb-[40px] bg-[#dadada] rounded-[20px] drop-shadow-2xl drop-shadow-[#a5a5a5] flex flex-col items-center">
          <div className="flex flex-col items-center mt-[100px] gap-[50px]">
            <div className="w-[100%] flex justify-center mb-[100px] mt-[30px]">
              <SearchButton width={800} />
            </div>
          </div>

          <RoomSlider
            list={results}
            heading="Verified By RoomEase"
            onRoomClick={setActiveRID}
            desc={
              "Stay stress-free with PGs officially verified for quality, comfort, and trust by RoomEase."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
