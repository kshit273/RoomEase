import RoomCard from "../components/RoomCard";
import Houses from "../constants/Houses";

const Search = () => {
  return (
    <div className="flex gap-5 mt-[100px] ml-[100px]">
      {Houses.map(({ head, imgPath, desc, isVerified }) => (
        <RoomCard
          head={head}
          imgPath={imgPath}
          desc={desc}
          isVerified={isVerified}
        />
      ))}
    </div>
  );
};

export default Search;
