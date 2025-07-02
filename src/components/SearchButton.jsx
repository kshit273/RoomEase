import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchButton = ({ width }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed !== "") {
      navigate(`/search/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-[#e5e5e5] border border-gray-300 rounded-[20px] px-4 py-2 pr-1 md:h-[60px] h-[40px] shadow-2xl"
      style={{ width: width ? `${width}px` : undefined }}
    >
      <input
        type="text"
        placeholder="Search about your area"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#e5e5e5] placeholder-gray-400 text-gray-800 md:text-xl text-sm focus:outline-none w-full"
      />
      <button
        type="submit"
        className="flex items-center justify-center p-2 mt-[2px] bg-[#d4d4d4] rounded-[15px] hover:bg-[#cfcfcf] transition md:w-[50px] w-[30px] md:h-[50px] h-[30px]"
      >
        <Search className="text-black w-[20px] h-[20px]" />
      </button>
    </form>
  );
};

export default SearchButton;
