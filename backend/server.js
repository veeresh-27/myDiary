const express = require("express");
const info = require("./data/info");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/app/info", (req, res) => {
  res.json(info);
});

app.get("/app/info/:id", (req, res) => {
  const inf = info.find((x) => x.id == req.params.id);
  res.send(inf);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
