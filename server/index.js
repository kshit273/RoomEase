const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello GET from RoomEase backend!" });
});

app.post("/api/hello", (req, res) => {
  res.json({ message: "Hello POST from RoomEase backend!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
