const express = require("express");
const info = require("./data/info");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config();
connectDB();
app.use(express.json());

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

app.use("/app/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
