const express = require("express");

// import commonjs Module
// import hàm getUser từ thư mục controller
const {
  getUser,
  createUser,
  getUserId,
  updateUser,
} = require("../controllers/userController");
const userRoute = express.Router();

// Tạo API phương thức GET
userRoute.get("/getUser", getUser);
userRoute.get("/getUserId/:id", getUserId);

// Tạo API phương thức POST
userRoute.post("/createUser", createUser);

// Tạo API phương thức PUT
userRoute.put("/updateUser/:id", updateUser);

module.exports = userRoute;
