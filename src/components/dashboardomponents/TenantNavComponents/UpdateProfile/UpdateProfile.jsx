import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdationForm from "./UpdationForm";

const UpdateProfile = ({ user, setUser, formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

  // Handle update request
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const changedData = {};
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== (user?.[key] || "")) {
          changedData[key] = formData[key];
        }
      });

      const res = await axios.put(
        "http://localhost:5000/auth/update",
        changedData,
        { withCredentials: true }
      );

      if (res.data?.user) {
        setUser(res.data.user);
      }

      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#e8e8e8] rounded-[20px] py-4 items-center justify-center">
      <UpdationForm
        formData={formData}
        setFormData={setFormData}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default UpdateProfile;
