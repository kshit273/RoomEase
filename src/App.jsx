import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./routes/search/Search";
import PgInfo from "./sections/PgInfo";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/pg/:RID" element={<PgInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
