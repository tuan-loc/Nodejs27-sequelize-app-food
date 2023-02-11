const express = require("express");
const likeRoute = express.Router();
const {
  like,
  unLike,
  getLikeListRestaurant,
  getLikeListUser,
} = require("../controllers/likeController");

likeRoute.post("/like/:id", like);
likeRoute.delete("/unLike/:id", unLike);
likeRoute.get("/getLikeListRestaurant/:id", getLikeListRestaurant);
likeRoute.get("/getLikeListUser/:id", getLikeListUser);

module.exports = likeRoute;
