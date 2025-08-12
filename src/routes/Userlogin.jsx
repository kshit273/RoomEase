import React from "react";
import LoginComp from "../components/UserloginComponents/LoginComp";

const Userlogin = () => {
  return (
    <div>
      {/* Background images */}
      <div className="absolute top-[-20px] left-[-20px] md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg.png" alt="background" />
      </div>
      <div className="absolute bottom-[50px] right-0  md:w-[512px] w-[256px]  md:h-[560px] h-[280px] pointer-events-none">
        <img src="/images/bgimg2.png" alt="background" />
      </div>

      {/* Signup and login cards */}
      <div className="w-[100vw] h-[100vh] flex items-center justify-center z-2">
        <LoginComp />
      </div>
    </div>
  );
};

export default Userlogin;
