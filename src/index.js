// yarn add express
// yarn add nodemon

// commonjs module => import
const express = require("express");

// gán lại hàm cho một biến mới
const app = express();

// Cho phép server backend đọc được chuỗi json
// middleware
app.use(express.json());

const cors = require("cors");
const rootRoute = require("./routes/rootRoute");
app.use(cors());

// khởi tạo server bằng Express
// port: địa chỉ định danh server
app.listen(8080);
app.use("/api", rootRoute);

// khởi tạo phương thức trả về cho FE
// Method: GET
// Rest param => ES6 ...
// path => đường dẫn phụ
// app.get("/demo/:id", (req, res) => {
//   // Nhận dữ liệu từ FE
//   // lấy dữ liệu params
//   //   let id = req.params.id;

//   // lấy dữ liệu query
//   // ?id=123&name=node27
//   // let id = req.query.id;

//   // lấy dữ liệu bằng body
//   let { id, hoTen, tuoi } = req.body;
//   // req.headers;

//   // Trả dữ liệu về cho FE
//   // có thể trả: chuỗi, object, list object, boolean
//   // không cho phép trả number
//   res.status(200).send({ id, hoTen, tuoi });
// });

// app.post();
// app.put();
// app.delete();

// yarn add mysql2
// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: 3306,
//   database: "db_nodejs27",
// });

// phương thức get có url
// app.get("/user", (req, res) => {
//   let { key } = req.params;
//   const sql = `SELECT * FROM users`;
//   conn.query(sql, (err, result) => {
//     res.send(result);
//   });
// });
