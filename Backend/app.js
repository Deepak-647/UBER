const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes= require('./routes/maps.routes');

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users",userRoutes);
app.use("/captains",captainRoutes);
app.use("/maps",mapRoutes);

module.exports = app;
