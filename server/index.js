const express = require("express");
const app = express();
const dotenv = require("dotenv");
var cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));

dotenv.config();

app.use(express.json());

const db = require("./db");
db.connect();

const router = require("./router/index");
app.use(router);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
