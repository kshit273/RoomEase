import { Link } from "react-router-dom";

const User = ({ imgPath }) => {
  return (
    <Link to="/profile">
      <div className="flex justify-between items-center w-[150px] mr-[30px] cursor-pointer">
        <img src="./images/wishlist.png" alt="wishlist" className="h-[40px]" />
        <img
          src={
            imgPath ? `http://localhost:5000${imgPath}` : "./images/user.png"
          }
          alt="wishlist"
          className="h-[50px] rounded-full"
        />
      </div>
    </Link>
  );
};

export default User;
