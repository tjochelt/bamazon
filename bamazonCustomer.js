const inquirer = require("inquirer");
const mysql = require("mysql");
require("dotenv").config();

let userName = "";
// create the connection information for the sql database
let connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  // Your password
  password: process.env.MYSQL,
  database: "bamazon_DB"
});
console.log(connection);

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
