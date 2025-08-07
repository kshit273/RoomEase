const User = ({ imgPath }) => {
  return (
    <div className="flex justify-between items-center w-[150px] mr-[30px]">
      <img src="./images/wishlist.png" alt="wishlist" className="h-[40px]" />
      <img
        src={imgPath ? imgPath : "./images/user.png"}
        alt="wishlist"
        className="h-[50px] rounded-full"
      />
    </div>
  );
};

export default User;
