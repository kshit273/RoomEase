import React from "react";

const LoginComp = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/images/loginBg.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="h-[90vh] w-[45vw] rounded-[30px] flex flex-col justify-between p-12">
          <div>
            <h1 className="text-[#e8e8e8] text-[60px] font-medium mb-8">
              Zimer
            </h1>
          </div>
          <div>
            <h2 className="text-[40px] font-medium text-[#d8d8d8] mb-4">
              Welcome Back !
            </h2>
          </div>
        </div>
        {/* Right Section */}
        <div className="bg-[#e8e8e8] h-[97vh] w-[40vw] rounded-[30px]  ml-[-40px] z-10">
          <div className="flex flex-col justify-center items-center shadow-xl h-full">
            <h2 className="text-5xl font-bold mb-10">Login.</h2>
            <form className="w-3/4 flex flex-col gap-6">
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
                <span className="material-icons text-gray-500 mr-2">
                  person
                </span>
                <input
                  type="text"
                  placeholder="username"
                  className="bg-transparent outline-none flex-1"
                />
              </div>
              <div className="flex items-center bg-gray-200 rounded-full px-4 py-3">
                <span className="material-icons text-gray-500 mr-2">lock</span>
                <input
                  type="password"
                  placeholder="password"
                  className="bg-transparent outline-none flex-1"
                />
                <span className="material-icons text-gray-500 ml-2 cursor-pointer">
                  visibility_off
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <label>
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <a href="#" className="underline">
                  Forgot Password ?
                </a>
              </div>
              <button
                type="submit"
                className="bg-black text-white rounded-full py-3 font-semibold text-lg shadow-lg hover:bg-gray-900 transition"
              >
                Login
              </button>
              <div className="text-center text-sm mt-2">
                Don&apos;t have an account ?{" "}
                <a href="#" className="underline">
                  Signup
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
