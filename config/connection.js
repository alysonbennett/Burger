// Set up MySQL connection
var util = require("util");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
  });

  // Make connection
  connection.connect(function(err) {
    if (err) {
      console.error("error connection: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId); 
  });

  connection.query = util.promisify(connection.query);

  // Export connection for ORM to use
  module.exports = connection;