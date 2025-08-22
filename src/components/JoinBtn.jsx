import { Link } from "react-router-dom";

const JoinBtn = ({ isSmallScreen }) => {
  return (
    <Link to="/userlogin">
      <div
        className={`${
          isSmallScreen
            ? `w-[70px] h-[25px] text-[9px]`
            : `w-[150px] h-[50px] text-xl`
        } rounded-[5px] flex items-center justify-center text-[#eaeaea] font-medium`}
        style={{
          background: "linear-gradient(120deg, #d72638 0%, #ff0084 100%)",
        }}
      >
        Join Now
      </div>
    </Link>
  );
};

export default JoinBtn;
