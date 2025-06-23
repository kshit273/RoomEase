import { useState } from "react";
import { Details } from "../constants/PgData";

const ShowRooms = ({ RID }) => {
  const filters = ["Price", "Single room", "Shared room", "Available"];

  const priceRange = [
    "less than ₹5,000",
    "₹5,000 - ₹7,500",
    "₹7,500 - ₹10,000",
    "more than ₹10,000",
  ];

  const [activeIdxs, setActiveIdxs] = useState([]);
  const [showPriceOverlay, setShowPriceOverlay] = useState(false);
  const [selectedPriceIdx, setSelectedPriceIdx] = useState(null);

  const toggleIdx = (idx) => {
    if (idx === filters.indexOf("Single room")) {
      setActiveIdxs((prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev.filter((i) => i !== filters.indexOf("Shared room")), idx]
      );
    } else if (idx === filters.indexOf("Shared room")) {
      setActiveIdxs((prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev.filter((i) => i !== filters.indexOf("Single room")), idx]
      );
    } else {
      setActiveIdxs((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
      );
    }
  };

  const filtersWithIdx = filters.map((filter, idx) => {
    let label = filter;
    if (filter === "Price" && selectedPriceIdx !== null) {
      label = priceRange[selectedPriceIdx];
    }

    return {
      filter: label,
      idx,
      selected: activeIdxs.includes(idx),
    };
  });

  const sortedFilters = [
    ...filtersWithIdx.filter((f) => f.selected),
    ...filtersWithIdx.filter((f) => !f.selected),
  ];

  const Data = Details.find((data) => data.RID === RID);

  const isSingleRoomFilterActive = activeIdxs.includes(
    filters.indexOf("Single room")
  );
  const isSharedRoomFilterActive = activeIdxs.includes(
    filters.indexOf("Shared room")
  );
  const isAvailableFilterActive = activeIdxs.includes(
    filters.indexOf("Available")
  );
  const isPriceFilterActive = activeIdxs.includes(filters.indexOf("Price"));

  const priceRangeFilters = [
    { min: 0, max: 4999 },
    { min: 5000, max: 7500 },
    { min: 7501, max: 10000 },
    { min: 10001, max: Infinity },
  ];

  let filteredRooms = Data.Rooms;
  if (isSingleRoomFilterActive) {
    filteredRooms = Data.Rooms.filter(
      (room) => room.Type.toLowerCase() === "single"
    );
  } else if (isSharedRoomFilterActive) {
    filteredRooms = Data.Rooms.filter(
      (room) => room.Type.toLowerCase() !== "single"
    );
  }

  if (isAvailableFilterActive) {
    filteredRooms = filteredRooms.filter((room) => room.AvailFrom !== 0);
  }

  if (isPriceFilterActive && selectedPriceIdx !== null) {
    const { min, max } = priceRangeFilters[selectedPriceIdx];
    filteredRooms = filteredRooms.filter(
      (room) => Number(room.Rent) >= min && Number(room.Rent) <= max
    );
  }

  return (
    <div>
      <div className="head text-[35px] font-medium">Rooms</div>
      <div className="filters flex gap-[10px] my-[10px]">
        {sortedFilters.map(({ filter, idx, selected }) => (
          <div
            key={idx}
            className={` ${
              selected
                ? "border-[1px] border-[#d72638] text-[#d72638]  py-[6px] px-[18px]"
                : "bg-[#cbcbcb] py-[8px] px-[20px]"
            } rounded-[20px] cursor-pointer text-[18px]`}
            onClick={() => {
              toggleIdx(idx);

              if (idx === filters.indexOf("Price")) {
                if (activeIdxs.includes(idx)) {
                  setSelectedPriceIdx(null);
                  setShowPriceOverlay(false);
                } else {
                  setShowPriceOverlay(true);
                }
              }
            }}
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="relative">
        {isPriceFilterActive && (
          <div
            className={`absolute z-10 bg-[#d7d7d7] rounded-[20px] w-[220px] p-[10px] px-[15px] flex flex-col gap-[10px] mb-[20px] shadow-lg
        transition-opacity duration-300 ease-in-out
        ${showPriceOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {priceRange.map((price, idx) => (
              <p
                key={idx}
                className={`text-[#464646] text-[18px] font-medium cursor-pointer ${
                  selectedPriceIdx === idx ? "text-[#d72638]" : ""
                }`}
                onClick={() => {
                  setSelectedPriceIdx(idx);
                  setShowPriceOverlay(false);
                }}
              >
                {price}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 auto-rows-auto max-w-[850px] gap-[30px] mt-[30px]">
        {filteredRooms.map((Room, idx) => (
          <div key={idx}>
            <div className="">
              <img
                src={`/images/PgInfoImgs/${RID}/${Room.RoomNo}/mainImg.jpg`}
                alt={Room.RoomNo}
                className={`w-[250px] h-[250px] object-cover rounded-[20px] ${
                  Room.AvailFrom === 0
                    ? "grayscale brightness-45 opacity-60"
                    : ""
                }`}
              />
            </div>
            <div className="flex justify-between mt-[10px] max-w-[250px]">
              <div className="left">
                <div className="roomnum text-[#1a1a1a] text-[28px] font-medium">
                  Room {Room.RoomNo}
                </div>
                <div className="price text-[#1a1a1a] text-[19px]">
                  ₹{Room.Rent}/mo
                </div>
              </div>
              <div className="right flex flex-col gap-[10px]">
                <div className="rating flex items-center justify-end gap-[7px] text-[#464646] text-[18px]">
                  <img
                    src="/images/star-filled.png"
                    alt="rating"
                    className="w-[15px] h-[15px]"
                  />
                  <p>{Room.Rating}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowRooms;
