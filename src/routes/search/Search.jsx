import { useState } from "react";
import FindRoom from "../../sections/FindRoom.jsx";
import PgInfo from "../../sections/PgInfo.jsx";
import Navbar from "../../components/Navbar.jsx";

const Search = () => {
  const [activeRID, setActiveRID] = useState(null);
  return (
    <>
      <Navbar />
      <FindRoom activeRID={activeRID} setActiveRID={setActiveRID} />
      {activeRID && <PgInfo RID={activeRID} />}
    </>
  );
};

export default Search;
