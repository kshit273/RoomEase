import axios from "axios";
import { useNavigate } from "react-router-dom";

const logOutBtn = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(res.data.message);

      // clear any user state in frontend
      setUser(null);

      // optionally redirect to login
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.response?.data || err.message);
    }
  };
  return (
    <div
      className="w-[150px] h-[50px] text-xl rounded-[5px] flex items-center justify-center text-[#eaeaea] font-medium cursor-pointer"
      style={{
        background: "linear-gradient(120deg, #d72638 0%, #ff0084 100%)",
      }}
      onClick={handleLogOut}
    >
      Log out
    </div>
  );
};

export default logOutBtn;
