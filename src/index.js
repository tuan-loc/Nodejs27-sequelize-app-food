const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");
const rootRoute = require("./routes/rootRoute");
app.use(cors());

app.listen(8080);
app.use("/api", rootRoute);
