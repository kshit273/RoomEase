import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdationForm from "./UpdationForm";

const UpdateProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    dob: user?.dob || "",
    gender: user?.gender || "",
    email: user?.email || "",
    phone: user?.phone || "",
    profilePicture: user?.profilePicture || "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/auth/me", {
          withCredentials: true,
        });
        setFormData((prev) => ({
          ...prev,
          firstName: res.data.firstName || "",
          lastName: res.data.lastName || "",
          dob: res.data.dob || "",
          gender: res.data.gender || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          profilePicture: res.data.profilePicture || "",
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setFetching(false);
      }
    };

    fetchUserData();
  }, []);

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

      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return <p>Loading profile...</p>;
  }

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
