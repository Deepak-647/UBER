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
const rideRoutes =require('./routes/ride.routes');

connectDB();

app.use(cors(
  {
    origin: "https://go-fleet.netlify.app", // Replace with your actual Netlify URL
    methods: "GET,POST",
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users",userRoutes);
app.use("/captains",captainRoutes);
app.use("/maps",mapRoutes);
app.use("/rides",rideRoutes);


module.exports = app;
