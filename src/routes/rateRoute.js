const express = require("express");
const {
  addRate,
  getRateListRestaurant,
  getRateListUser,
} = require("../controllers/rateController");
const rateRoute = express.Router();

rateRoute.post("/addRate/:id", addRate);
rateRoute.get("/getRateListRestaurant/:id", getRateListRestaurant);
rateRoute.get("/getRateListUser/:id", getRateListUser);

module.exports = rateRoute;
