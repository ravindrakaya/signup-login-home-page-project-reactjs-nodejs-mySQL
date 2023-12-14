const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors("*"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

// Registration Api call
app.post("/signup/", (req, res) => {
  const sql =
    "INSERT INTO user (`name`,`email`,`phone`,`username`,`password`) VALUES(?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.username,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server Running....");
});
