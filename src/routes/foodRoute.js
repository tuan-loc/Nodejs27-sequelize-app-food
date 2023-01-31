const express = require("express");
const foodRoute = express.Router();
const { getFood } = require("../controllers/foodController");

foodRoute.get("/getFood", getFood);

module.exports = foodRoute;
