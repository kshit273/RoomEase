import { useEffect } from "react";
import { navLinks } from "../constants/Abt";

const Hamburger = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [show]);
  return (
    <div
      className={`fixed h-[105vh] w-[300px] right-0 top-0 flex flex-col bg-[#1a1a1a] shadow-2xl z-50 transition-transform duration-300 ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="flex justify-between items-center h-[80px] pr-4 mb-4 pl-4">
        <div className="h-[30px] w-[30px]">
          <div className="flex gap-2.5">
            <p className="text-[#d7d7d7] pt-1">RoomEase</p>
          </div>
        </div>
        <div className="h-[20px] w-[20px] cursor-pointer" onClick={onClose}>
          <img src="./images/cross.png" alt="cross" />
        </div>
      </div>
      <ul>
        {navLinks.map(({ link, name }) => (
          <li key={name} className="group px-5 pb-[30px]">
            <a href={link}>
              <span className="text-[12px] text-[#d7d7d7]">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hamburger;
