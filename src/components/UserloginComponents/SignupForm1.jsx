import React, { useState } from "react";
import GenderDropdown from "./GenderDropdown";

const signupForm1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "Gender*",
    profilePic: null,
  });

  const [profilePreview, setProfilePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prev) => ({
      ...prev,
      profilePic: file,
    }));
    if (file) {
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // have to send formData to backend here
  };

  return (
    <form className="w-3/4 flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex items-center justify-center mb-[30px]">
        <div className="relative bg-[#d7d7d7] h-[200px] w-[200px] rounded-full flex items-center justify-center">
          <img
            src={profilePreview || "./images/usericon.png"}
            alt=""
            className={
              profilePreview
                ? "h-[200px] w-[200px] object-cover rounded-full opacity-100"
                : "h-[100px] w-[100px] opacity-60 object-cover rounded-full"
            }
          />
          <label
            htmlFor="profile-upload"
            className="absolute bottom-4 right-4 bg-[#1a1a1a] h-[70px] w-[70px] rounded-full flex items-center justify-center cursor-pointer"
          >
            <img
              src="./images/pencil.png"
              alt="Edit"
              className="h-[32px] w-[32px]"
            />
          </label>
          <input
            id="profile-upload"
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
          />
        </div>
      </div>
      <div className="flex items-center bg-[#d7d7d7] rounded-full px-4 py-5">
        <span className="material-icons text-gray-500 mr-4 ml-2">
          <img
            src="./images/usericon.png"
            alt=""
            className="h-[26px] w-[26px]"
          />
        </span>
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          className="bg-[#d7d7d7] outline-none flex-1"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center bg-[#d7d7d7] rounded-full px-4 py-5">
        <span className="material-icons text-gray-500 mr-4 ml-2">
          <img
            src="./images/usericon.png"
            alt=""
            className="h-[26px] w-[26px]"
          />
        </span>
        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          className="bg-[#d7d7d7] outline-none flex-1"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex items-center justify-between ">
        <div className="flex items-center bg-[#d7d7d7] rounded-full px-4 pr-15 py-5 flex-1 ml-2">
          <span className="material-icons text-gray-500 mr-4 ml-2">
            <img
              src="./images/calender.png"
              alt=""
              className="h-[22px] w-[22px]"
            />
          </span>
          <input
            type="text"
            name="dob"
            placeholder="DD/MM/YYYY*"
            className="bg-[#d7d7d7] outline-none flex-1"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center bg-[#d7d7d7] rounded-full px-4 pr-15 py-5 flex-1 mr-2 ml-2">
          <span className="material-icons text-gray-500 mr-4 ml-2">
            <img
              src="./images/gender.png"
              alt=""
              className="h-[26px] w-[26px]"
            />
          </span>
          <div className="w-full">
            <GenderDropdown
              gender={formData.gender}
              setGender={handleGenderChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-[20px]">
        <p>* mandatory fields</p>
      </div>
      <div className="flex items-center justify-center ">
        <button
          type="submit"
          className="bg-[#1a1a1a] text-[#e8e8e8] rounded-full py-3 px-7 font-medium text-[12px] shadow-lg hover:bg-gray-900 transition"
        >
          1 / 3
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <button
          type="submit"
          className="bg-[#1a1a1a] text-white rounded-full py-3 px-3 font-semibold text-lg shadow-lg hover:bg-gray-900 transition cursor-pointer"
        >
          <img
            src="./images/arrowWhite.png"
            alt=""
            className="h-[20px] w-[20px]"
          />
        </button>
      </div>
    </form>
  );
};

export default signupForm1;
