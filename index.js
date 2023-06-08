const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware // I changed my folder name, Im checking it it working or not
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("endgame is running");
});

app.listen(port, () => {
  console.log(`endgame server running on port ${port}`);
});