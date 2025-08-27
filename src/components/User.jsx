import { Link } from "react-router-dom";

const User = ({ imgPath, role }) => {
  return (
    <>
      <div className="flex justify-center items-center w-[250px]  gap-10 ">
        <div>
          <img
            src="../images/wishlist.png"
            alt="wishlist"
            className="h-[30px] cursor-pointer"
          />
        </div>
        <div>
          <img
            src="../images/message.png"
            alt="messenger"
            className="h-[35px] cursor-pointer"
          />
        </div>
        <Link to={`/${role}/dashboard`}>
          <div>
            <img
              src={
                imgPath
                  ? `http://localhost:5000${imgPath}`
                  : "./images/user.png"
              }
              alt="wishlist"
              className="h-[40px] w-[40px] rounded-full flex-shrink-0 cursor-pointer"
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default User;
