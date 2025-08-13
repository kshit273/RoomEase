import React, { useState } from "react";
import LoginComp from "../components/UserloginComponents/LoginComp";
import SignupComp from "../components/UserloginComponents/SignupComp";

const Userlogin = () => {
  const [showLogin, setShowLogin] = useState(true);

  // Functions to pass to child components for toggling
  const handleShowLogin = () => setShowLogin(true);
  const handleShowSignup = () => setShowLogin(false);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center z-2">
      <div className="relative w-full h-screen">
        <img
          src="/images/loginBg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
          {/* Left Section */}
          <div className="h-[90vh] w-[45vw] rounded-[30px] flex flex-col justify-between p-0">
            <div>
              <h1 className="text-[#e8e8e8] text-[60px] font-medium ml-10">
                Zimer
              </h1>
            </div>
            <div>
              <h2 className="text-[50px] font-medium text-[#d8d8d8] ml-10">
                Welcome Back !
              </h2>
            </div>
          </div>
          {showLogin ? (
            <LoginComp onShowSignup={handleShowSignup} />
          ) : (
            <SignupComp onShowLogin={handleShowLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
