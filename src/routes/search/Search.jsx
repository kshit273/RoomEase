import { useState } from "react";
import FindRoom from "../../sections/FindRoom.jsx";
import PgInfo from "../../sections/PgInfo.jsx";

const Search = () => {
  const [activeRID, setActiveRID] = useState(null);
  return (
    <>
      <FindRoom activeRID={activeRID} setActiveRID={setActiveRID} />
      {activeRID && <PgInfo RID={activeRID} />}
    </>
  );
};

export default Search;
