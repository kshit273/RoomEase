import React from "react";

const MapPreview = ({ lat, lng }) => {
  if (!lat || !lng) {
    return <div className="w-full h-[500px] bg-[#d7d7d7] rounded-2xl overflow-hidden shadow-md mt-4">
      <p className="text-[#e8e8e8]">Location not available</p>
      </div>;
  }

  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md mt-4">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
      ></iframe>
    </div>
  );
};

export default MapPreview;
