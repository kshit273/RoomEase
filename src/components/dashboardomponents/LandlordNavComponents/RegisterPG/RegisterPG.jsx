import React, { useState } from "react";
import RoomForm from "./RoomForm";
import Radio from "./Radio";
import Checkbox from "../../TenantNavComponents/LeavePG/Checkbox";

const RegisterPG = () => {
  const [formData, setFormData] = useState({
    pgName: "",
    description: "",
    address: {
      line1: "",
      line2: "",
      landmark: "",
      city: "",
      state: "",
      pin: "",
    },
    features: [],
    otherFeatures:"",
    rooms: [],
    pgType: "",
    totalRooms: "",
    rules: "",
    addInfo: "",
    foodAvailability: "",
    menuImage: null,
    selfCooking: false,
    tiffin: false,
    confirmInfo: false,
    agreeTerms: false,
    allowPromo: false,
    coverPhoto: null,
    otherPhotos: [], 
  });
  const [rooms, setRooms] = useState([]);

  const handleRoomChange = (index, newData) => {
    const updated = [...rooms];
    updated[index] = newData;
    setRooms(updated);
  };

  const addRoom = () => {
    setRooms([...rooms, {}]);
  };

  const removeRoom = (index) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, type, files, checked, value } = e.target;

    if (type === "file") {
      if (name === "coverPhoto") {
        setFormData((prev) => ({
          ...prev,
          coverPhoto: files[0],
        }));
      } else if (name === "otherPhotos") {
        setFormData((prev) => ({
          ...prev,
          otherPhotos: [...files],
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    console.log("Final Rooms Data:", rooms);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 p-6 rounded-[20px]"
    >
      {/* PG Photos */}
     <div className="grid grid-cols-2 gap-4">
        {/* Cover Photo */}
<label className="h-100  flex items-center justify-center rounded-lg bg-[#e8e8e8] cursor-pointer relative overflow-hidden">
  {formData.coverPhoto ? (
    <img
      src={URL.createObjectURL(formData.coverPhoto)}
      alt="Cover Preview"
      className="w-full h-full object-cover"
    />
  ) : (
    "Add the cover photo here"
  )}
  <input
    type="file"
    name="coverPhoto"
    accept="image/*"
    className="hidden"
    onChange={handleChange}
  />
</label>

{/* Other Photos */}
<label className="min-h-100  flex items-center justify-center rounded-lg bg-[#e8e8e8] cursor-pointer relative overflow-hidden">
  {formData.otherPhotos.length > 0 ? (
    <div className="grid grid-cols-2 gap-2 w-full p-2">
      {formData.otherPhotos.map((photo, index) => (
        <img
          key={index}
          src={URL.createObjectURL(photo)}
          alt={`Preview ${index}`}
          className="w-full h-48 object-cover rounded"
        />
      ))}
    </div>
  ) : (
    "Add other photos"
  )}
  <input
    type="file"
    name="otherPhotos"
    accept="image/*"
    multiple
    className="hidden"
    onChange={handleChange}
  />
</label>

      </div>
      {/* Basic Info */}
      <div className=" p-4 rounded-lg ">
        <label className="block text-[20px] text-[#5c5c5c] font-medium">Name of the PG</label>
        <input
          type="text"
          name="pgName"
          value={formData.pgName}
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2 mb-4"
        />

        <label className="block text-[20px] text-[#5c5c5c] font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
          rows={3}
        />
      </div>

      {/* Address Details */}
      <div className=" p-4 rounded-lg ">
        <p className="block text-[20px] text-[#5c5c5c] font-medium">Address Details</p>
        <input
          type="text"
          placeholder="House no. / Building name / Lane no."
          name="line1"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2 mb-2"
        />
        <input
          type="text"
          placeholder="Address line 2"
          name="line2"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mb-2"
        />
        <input
          type="text"
          placeholder="Nearby landmark (optional)"
          name="landmark"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mb-2"
        />
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="City name"
            name="city"
            onChange={handleChange}
            className="w-full p-2 bg-[#e8e8e8] rounded-lg"
          />
          <input
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
            className="w-full p-2 bg-[#e8e8e8] rounded-lg"
          />
        </div>
        <input
          type="text"
          placeholder="Pin Code"
          name="pin"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
        />
      </div>

      {/* Features */}
      <div className=" p-6 rounded-lg ">
        <p className="block text-[20px] text-[#5c5c5c] font-medium mb-4">PG Features</p>
        <div className="flex flex-wrap gap-2">
          {[{ imgPath: "../images/serviceImgs/spatula.png", featureName: "Kitchen" },
          { imgPath: "../images/serviceImgs/wifi-signal.png", featureName: "WiFI" },
          { imgPath: "../images/serviceImgs/air-conditioner.png", featureName: "Air Conditioner" },
          { imgPath: "../images/serviceImgs/cctv.png", featureName: "CCTV" },
          { imgPath: "../images/serviceImgs/car-parking.png", featureName: "Parking" },
          { imgPath: "../images/serviceImgs/hot.png", featureName: "Geyser" },
          { imgPath: "../images/serviceImgs/thunderbolt.png", featureName: "Power Backup" },
          { imgPath: "../images/serviceImgs/washing-machine.png", featureName: "Washing Machine" },
          { imgPath: "../images/serviceImgs/water.png", featureName: "Drinking water" },
          { imgPath: "../images/serviceImgs/fridge.png", featureName: "Refridgerator" },].map((feature, i) => (
            <button
              key={i}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  features: prev.features.includes(feature.featureName)
                    ? prev.features.filter((f) => f !== feature.featureName)
                    : [...prev.features, feature.featureName],
                }))
              }
              className={` flex items-center gap-4 px-4 py-1.5 rounded-full bg-[#e8e8e8] cursor-pointer ${
                formData.features.includes(feature.featureName)
                  ? "border border-[#d72638]"
                  : ""
              }`}
            >
              <div>
                <img src={feature.imgPath} alt="" className="h-[30px] w-[30px]"/>
              </div>
              <div className="text-[16px] text-[#5c5c5c]">{feature.featureName}</div>
            </button>
          ))}
          </div>
        <label className="block text-[16px] text-[#5c5c5c] font-medium mt-4">Other features , if any</label>
        <textarea
          name="otherFeatures"
          value={formData.otherFeatures}
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
          rows={3}
        />
        
      </div>

      {/* Rooms */}
      <div className=" p-4 rounded-lg ">
        <p className="block text-[22px] text-[#5c5c5c] font-medium mb-2">Rooms</p>
        {rooms.map((room, index) => (
          <RoomForm
            key={index}
            index={index}
            onChange={handleRoomChange}
            onRemove={removeRoom}
          />
        ))}
        <button
          type="button"
          onClick={addRoom}
          className="mt-2 px-4 py-2 bg-[#1a1a1a] text-[#e8e8e8] rounded-[40px] cursor-pointer"
        >
          + Add another room
        </button>
      </div>

      {/* Other Info */}
      <div className=" p-4 rounded-lg">
        <p className="block text-[22px] text-[#5c5c5c] font-medium mb-2">Other Info</p>
        <div className="flex items-center gap-4"><p>Pg type</p><Radio option1={"boys"} option2={"girls"} option3={"both"}/></div>
        <div className="flex flex-col  mt-4">
          <p>Number of rooms</p>
          <input
          type="number"
          name="totalRooms"
          placeholder="Total no. of rooms"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
        />
        </div>
        

        <label className="block mt-4">PG Rules & Conditions</label>
        <textarea
          name="rules"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
          rows={3}
        />
        <label className="block mt-4">Additional info</label>
        <textarea
          name="addInfo"
          onChange={handleChange}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg mt-2"
          rows={3}
        />
      </div>

      <div className=" p-4 rounded-lg ">
        <p className="block text-[22px] text-[#5c5c5c] font-medium mb-2">Food Availability</p>
        <textarea
          name="foodAvailability"
          value={formData.foodAvailability}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 bg-[#e8e8e8] rounded-lg"
          placeholder="Describe the food availability..."
        />
        <div className="mt-3">
          <label className="block font-medium mb-1">Upload Menu Image</label>
          <input
            type="file"
            name="menuImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 bg-[#e8e8e8] rounded-lg"
          />

          {/* Image Preview */}
          {formData.menuImage && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-1">Preview:</p>
              <img
                src={URL.createObjectURL(formData.menuImage)}
                alt="Menu Preview"
                className="max-h-40 rounded-lg border"
              />
            </div>
          )}
        </div>
        <div className="flex gap-4 mt-3">
          <div className="flex items-center justify-center">
            {/* <input
              type="checkbox"
              name="selfCooking"
              checked={formData.selfCooking}
              onChange={handleChange}
            />{" "} */}
            <Checkbox/>
            Self-Cooking Allowed?
          </div>
          <div className="flex items-center justify-center">
            {/* <input
              type="checkbox"
              name="tiffin"
              checked={formData.tiffin}
              onChange={handleChange}
            />{" "} */}
            <Checkbox/>
            Tiffin Service Available?
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="p-4 rounded-lg shadow flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          {/* <input
            type="checkbox"
            name="confirmInfo"
            checked={formData.confirmInfo}
            onChange={handleChange}
          />{" "} */}
          <Checkbox/>
          I confirm that the above information is true and accurate.
        </div>
        <div className="flex gap-4 items-center">
          {/* <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />{" "} */}
          <Checkbox/>
          I agree to Zimer's terms & conditions and privacy policy.
        </div>
        <div className="flex gap-4 items-center">
          {/* <input
            type="checkbox"
            name="allowPromo"
            checked={formData.allowPromo}
            onChange={handleChange}
          />{" "} */}
          <Checkbox/>
          I allow Zimer to use my listing data for promotional purposes.{" "}
          <span className="text-gray-500">(optional)</span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-[#d72638] text-[#e8e8e8] p-3 rounded-lg font-medium hover:bg-[#9b1b30] duration-200"
      >
        Save and Continue
      </button>
    </form>
  );
};

export default RegisterPG;
