const express = require("express");
const rootRoute = express.Router();
const userRoute = require("./userRoute");
const foodRoute = require("./foodRoute");

// sử dụng middleware của express
rootRoute.use("/user", userRoute);

// food
rootRoute.use("/food", foodRoute);

// food
// rootRoute.use("/food", foodRoute);

module.exports = rootRoute;
