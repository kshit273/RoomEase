import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./routes/Home.jsx";
import Search from "./routes/search/Search.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Search />
  </StrictMode>
);
