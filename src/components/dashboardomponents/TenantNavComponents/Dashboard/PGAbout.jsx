import React from "react";

const PGAbout = ({ formData }) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-4xl font-medium my-4">
        {formData.role.charAt(0).toUpperCase() + formData.role.slice(1)}{" "}
        Dashboard
      </p>
      <div className="flex gap-5">
        <div className="h-[300px] w-[300px] min-w-[300px] rounded-[30px] bg-[#1a1a1a]">
          {formData.role === "tenant" ? (
            <div className="flex gap-3 items-center justify-end p-3">
              <div className="w-[40px] h-[40px] bg-[#cdcdcd] rounded-full p-2">
                <img src="../images/call.png" alt="" />
              </div>
              <div className="w-[40px] h-[40px] bg-[#cdcdcd] rounded-full p-1.5">
                <img src="../images/message.png" alt="" />
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <div className="flex justify-between items-center  p-2">
            <p className="text-2xl font-medium text-[#464646]">Sunlight PG</p>
            {formData.role === "tenant" ? (
              <div className="w-[35px] h-[35px] bg-[#cdcdcd] rounded-full p-2.5">
                <img src="../images/report.png" alt="" />
              </div>
            ) : null}
          </div>
          <p className="p-2 text-[#464646]">
            C33J+88Q Maya PG,Bagryal,village, near DIT college, oppostie Mega
            county,Salan Gaon,Bhagwant Pur, Dehradun
          </p>
          <div className="py-3 flex flex-col gap-1 text-[16px] px-2">
            <div className="flex gap-5">
              <p>PG owner</p>
              <p className="font-light">Honey singh</p>
            </div>
            <div className="flex gap-5">
              <p>PG status</p>
              <p className="font-light">Premium</p>
            </div>
            {formData.role === `tenant` ? (
              <div className="flex gap-5">
                <p>Current Rent</p>
                <p className="font-light">$400</p>
              </div>
            ) : (
              <div className="flex gap-5">
                <p>Total rooms</p>
                <p className="font-light">10</p>
              </div>
            )}

            {formData.role === "tenant" ? (
              <div className="flex gap-5">
                <p>Room no.</p>
                <p className="font-light">105</p>
              </div>
            ) : (
              <div className="flex gap-5">
                <p>Occupied rooms</p>
                <p className="font-light">7</p>
              </div>
            )}
          </div>
          {formData.role === `tenant` ? (
            <p className="font-light italic px-2">staying since may 2025</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PGAbout;
