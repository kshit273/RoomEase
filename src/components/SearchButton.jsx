import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <div className="flex items-center bg-[#e5e5e5] border border-gray-300 rounded-[15px] px-4 py-2 pr-1 w-full md:h-[60px] h-[40px] max-w-xl">
      <input
        type="text"
        placeholder="Search about your area"
        className="bg-[#e5e5e5] placeholder-gray-400 text-gray-800 md:text-xl text-sm focus:outline-none w-full"
      />
      <button className=" flex items-center justify-center p-2 bg-[#d4d4d4] rounded-[15px] hover:bg-[#cfcfcf] transition md:w-[50px] w-[30px] md:h-[50px] h-[30px]">
        <Search className="text-black w-[20px] h-[20px]" />
      </button>
    </div>
  );
};

export default SearchButton;
