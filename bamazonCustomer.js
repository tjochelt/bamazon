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

connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT *  FROM products", function(err, result) {
    if (err) throw err;
    console.log(result);

    inquirer
      .prompt([
        {
          name: "chooseProduct",
          type: "input",
          message: "What can I do 'ya for? Don't be shy, enter the product ID."
        },
        {
          name: "chooseQuantity",
          type: "input",
          message: "How many 'ya need?"
        }
      ])
      .then(function(answers) {
        //if answers.chooseproduct != a product, tell them.
        //if answers.chooseproduct does = a product, compare choosequantity to stock_quantity
        let chosenItem = "";
        for (let i = 0; i < result.length; i++) {
          if (result[i].item_name === answers.chooseProduct) {
            console.log("logic worked " + answers.chooseProduct);
            chosenItem = result[i];
          }
        }

        // if (answers.chooseProduct > 9) {
        //   console.log("We don't seem to have that in stock, come again!");
        // } else if (answers.chooseProduct > result[9].stock_quantity) {
        //   console.log(
        //     "Seems as though we don't have enough for ya! Come back again soon!"
        //   );
        // }
      });
  });
});
