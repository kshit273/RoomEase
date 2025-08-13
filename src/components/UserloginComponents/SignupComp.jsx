import SignupForm1 from "./SignupForm1";

const SignupComp = ({ onShowLogin }) => {
  return (
    <div className="bg-[#e8e8e8] h-[97vh] w-[40vw] rounded-[30px]  ml-[-40px] z-10">
      <div className="flex flex-col shadow-xl h-full">
        <div className="ml-[50px]">
          <h2 className="text-[60px] font-semibold my-24">Signup.</h2>
        </div>
        <div className="flex items-center justify-center ">
          <SignupForm1 />
        </div>
        <div className="text-center text-sm mt-2">
          already a user ?{" "}
          <a
            href="#"
            className="underline"
            onClick={(e) => {
              e.preventDefault();
              onShowLogin();
            }}
          >
            LogIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupComp;
