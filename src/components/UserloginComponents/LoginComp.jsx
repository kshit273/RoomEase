import React from "react";

const LoginComp = ({ onShowSignup }) => {
  return (
    <div className="bg-[#e8e8e8] h-[97vh] w-[40vw] rounded-[30px]  ml-[-40px] z-10">
      <div className="flex flex-col shadow-xl h-full">
        <div className="ml-[50px]">
          <h2 className="text-[60px] font-semibold my-30">Login.</h2>
        </div>
        <div className="flex items-center justify-center mt-[50px]">
          <form className="w-3/4 flex flex-col gap-6">
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
                placeholder="username"
                className="bg-[#d7d7d7] outline-none flex-1"
              />
            </div>
            <div className="flex items-center bg-[#d7d7d7] rounded-full px-4 py-5 mb-[10px]">
              <span className="material-icons text-gray-500 mr-4 ml-2">
                <img
                  src="./images/padlock.png"
                  alt=""
                  className="h-[26px] w-[26px]"
                />
              </span>
              <input
                type="password"
                placeholder="password"
                className="bg-transparent outline-none flex-1"
              />
              <span className="material-icons text-gray-500 ml-2 cursor-pointer"></span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-[20px]">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="underline">
                Forgot Password ?
              </a>
            </div>
            <div className="flex items-center justify-center ">
              <button
                type="submit"
                className="bg-[#1a1a1a] text-white rounded-full py-3 px-20 font-semibold text-lg shadow-lg hover:bg-gray-900 transition"
              >
                Login
              </button>
            </div>
            <div className="text-center text-sm mt-2">
              Don&apos;t have an account ?{" "}
              <a
                href="#"
                className="underline"
                onClick={(e) => {
                  e.preventDefault();
                  onShowSignup();
                }}
              >
                Signup
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
