// kết nối csdl
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql", // hệ CSDL đang sử dụng
});

module.exports = sequelize;

// try {
//   sequelize.authenticate();
//   console.log("kết nối thành công");
// } catch (error) {
//   console.log("kết nối thất bại", error);
// }
// node src/models/index.js
