const express = require("express");
const { addOrder } = require("../controllers/orderController");
const orderRoute = express.Router();

orderRoute.post("/addOrder", addOrder);

module.exports = orderRoute;
