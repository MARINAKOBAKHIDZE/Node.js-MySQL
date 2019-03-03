var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazonDB"
});
connection.query('SELECT 1 + 1 AS solution', function (error, results) {
  if (error) throw error;
  return 'Connected'
});

inquirer.prompt([{
  type: "input",
  name: "id",
  message: "What id would you like to choose?"
}, {
  type: "input",
  name: "product",
  message: "Give me product name"
}]).then(function (answer) {
  
  console.log(answer)
  connection.query("SELECT * from bamazonDB.products where item_id = ?", [answer.id], function (error, results) {
    if (error) throw error;
    return console.table(results)
  })
})
// function runSearch() {
//     inquirer
//       .prompt({
//         name: "action",
//         type: "list",
//         message: "What is the id of the product you would like?",
//         choices: [1,2,4,6,8,10,12,14]
//         })
//         .then(function(answer)){
//             switch(answer.action){
//                 case"
//             }
//         }