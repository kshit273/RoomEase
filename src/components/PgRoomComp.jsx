import { useState } from "react";
import Calander from "../components/Calander.jsx";
import RoomFeatures from "./RoomFeatures.jsx";

const PgRoomComp = ({ room, onClose, RID }) => {
  const images = room.images;
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[999999] bg-[rgba(0,0,0,0.6)] flex items-center justify-center p-6">
      <div className="bg-[#e8e8e8] rounded-[20px] shadow-lg p-[25px] w-[1500px] relative overflow-y-auto h-[800px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[24px] font-bold text-[#d72638] "
        >
          <img
            src="/images/close.png"
            alt=""
            className="h-[30px] w-[30px] hover:scale-110 duration-300 cursor-pointer"
          />
        </button>

        <div className="flex items-center justify-between gap-[20px]">
          <div className="w-3/5 h-[750px] relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
              aria-label="Previous"
            >
              <img
                src="/images/arrowBlack.png"
                alt="prev"
                className="w-8 h-8 rotate-180"
              />
            </button>
            {/* Image */}
            <img
              src={images[current]}
              alt={`room-${current + 1}`}
              className={`h-full w-full object-cover rounded-[10px] ${
                room.AvailFrom === 0 ? `grayscale brightness-45 opacity-60` : ``
              }`}
            />
            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
              aria-label="Next"
            >
              <img
                src="/images/arrowBlack.png"
                alt="next"
                className="w-8 h-8"
              />
            </button>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-3 h-3 rounded-full ${
                    idx === current ? "bg-[#1a1a1a]" : "bg-[#bdbdbd]"
                  }`}
                  onClick={() => setCurrent(idx)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex-col gap-[20px]">
            <div className="w-full flex justify-start font-medium text-[35px] ml-[10px] mb-[10px]">
              Room {room.RoomNo}
            </div>
            <div className="ml-[10px] mb-[30px] text-[#757575] font-medium">
              {room.desc}
            </div>
            <div className="calender">
              <Calander date={room.AvailFrom} />
            </div>
            <div className="features ">
              <RoomFeatures features={room.features} />
            </div>

            <div className="flex gap-4 mt-6 ">
              <button
                className={` h-[40px] bg-gradient-to-r from-[#d72638] to-[#ff007f] text-white font-medium text-[16px] px-8 rounded-full shadow-md  transition-transform duration-300  ${
                  room.AvailFrom === 0
                    ? `grayscale brightness-45 opacity-60`
                    : `hover:scale-105 `
                }`}
              >
                Book now
              </button>
              <div className=" h-[40px] w-[130px] bg-gradient-to-r from-[#d72638] to-[#ff0084]  rounded-full grid items-center justify-center">
                <div className=" h-[35px] w-[125px] bg-[#e8e8e8] rounded-full grid items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d72638] to-[#ff007f] font-medium text-[13px]">
                    ₹{room.Rent}/month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgRoomComp;
