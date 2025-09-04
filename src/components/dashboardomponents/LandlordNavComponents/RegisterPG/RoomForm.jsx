import React, { useState } from "react";
import PgOccupancyDropdown from "./PgOccupancyDropdown";
import Radio from "./Radio";

const RoomForm = ({ index, onChange, onRemove }) => {
  const [roomData, setRoomData] = useState({
    photos: [],
    roomType: "Select here",
    furnished: "",
    rent: "",
    available: false,
    availableFrom: "",
    description: "",
    features: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newData = {
      ...roomData,
      [name]: type === "checkbox" ? checked : value,
    };
    setRoomData(newData);
    onChange(index, newData);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = [...roomData.photos, ...files];
    const newData = { ...roomData, photos: newPhotos };
    setRoomData(newData);
    onChange(index, newData);
  };

  const removePhoto = (photoIndex) => {
    const newPhotos = roomData.photos.filter((_, i) => i !== photoIndex);
    const newData = { ...roomData, photos: newPhotos };
    setRoomData(newData);
    onChange(index, newData);
  };

  const toggleFeature = (feature) => {
    const newFeatures = roomData.features.includes(feature)
      ? roomData.features.filter((f) => f !== feature)
      : [...roomData.features, feature];
    const newData = { ...roomData, features: newFeatures };
    setRoomData(newData);
    onChange(index, newData);
  };

  const setItem = (value)=>{
    const newData = { ...roomData, roomType: value };
    setRoomData(newData)
  }
  return (
    <div className="bg-[#e8e8e8] p-4 rounded-lg  mb-4">
      <div className="flex justify-between items-center mb-3">
        <p className="block text-[20px] text-[#5c5c5c] font-medium">Room {index + 1}</p>
        {onRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className=""
          >
            <img src="../images/close.png" alt="" className="h-[25px] w-[25px] cursor-pointer"/>
          </button>
        )}
      </div>

      {/* Room photos */}
      <label className="block text-[#5c5c5c] font-medium mb-1">Room Photos</label>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 bg-[#e2e2e2] rounded-lg mb-3"
      />
      {roomData.photos.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-3">
          {roomData.photos.map((photo, i) => (
            <div key={i} className="relative">
              <img
                src={URL.createObjectURL(photo)}
                alt="Room Preview"
                className="h-[200px] w-[200px] object-cover rounded-lg "
              />
              <button
                type="button"
                onClick={() => removePhoto(i)}
                className="absolute top-2 right-2 bg-[#e8e8e8] text-white rounded-full text-xs p-1"
              >
                <img src="../images/close.png" alt="" className="h-[15px] w-[15px] cursor-pointer"/>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Room type */}
      <div className="flex gap-4 my-3">
        <div className="block text-[#5c5c5c] font-medium mb-1">Room Type</div>
        <div className=""><PgOccupancyDropdown value={roomData.roomType} setItem={setItem}/></div>
      </div>

      {/* Rent */}
      <label className="block text-[#5c5c5c] font-medium mb-1">Monthly Rent</label>
      <input
        type="number"
        name="rent"
        value={roomData.rent}
        onChange={handleChange}
        className="w-full p-2 bg-[#e2e2e2] rounded-lg mb-3"
      />
     

      {/* Availability */}
      <div className="flex items-center gap-4 my-4">
        <label>
          <input
            type="checkbox"
            name="available"
            checked={roomData.available}
            onChange={handleChange}
          />{" "}
          Available?
        </label>
        {roomData.available && (
          <input
            type="date"
            name="availableFrom"
            value={roomData.availableFrom}
            onChange={handleChange}
            className="p-2 bg-[#e2e2e2] rounded-lg"
          />
        )}
      </div>

       {/* Furnished */}
      <div className="block text-[#5c5c5c] font-medium my-2">Furnished</div>
      <div className="flex items-center gap-4"><Radio option1={"No"} option2={"semi"} option3={"fully"}/></div>
      {/* <div className="flex gap-4 mb-3">
        {["No", "Semi", "Fully"].map((val) => (
          <label key={val}>
            <input
              type="radio"
              name="furnished"
              value={val}
              checked={roomData.furnished === val}
              onChange={handleChange}
            />{" "}
            {val}
          </label>
        ))}
      </div> */}


      {/* Description */}
      <label className="block text-[#5c5c5c] font-medium my-3">Description</label>
      <textarea
        name="description"
        value={roomData.description}
        onChange={handleChange}
        rows={3}
        className="w-full p-2 bg-[#e2e2e2] rounded-lg mb-3"
      />

      {/* Features */}
      <p className="font-medium text-[#5c5c5c] mb-2">Features</p>
      <div className="flex flex-wrap gap-2">
        {["Air Conditioner", "Attached Bathroom", "Bed", "Table & Chair"].map(
          (feature, i) => (
            <button
              key={i}
              type="button"
              onClick={() => toggleFeature(feature)}
              className={`px-3 py-1 rounded-full bg-[#e2e2e2] ${
                roomData.features.includes(feature)
                  ? "border border-[#d72638] "
                  : ""
              }`}
            >
              {feature}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default RoomForm;
