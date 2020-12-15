// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all SQL statement functions
var orm = {
     selectAll: function(table, cb) {
          var dbQuery = "SELECT * FROM " + table + ";";
          connection.query(dbQuery, function(err, result) {
          if (err) {
               throw err;
          }
          cb(result);
          });
     },
     insertOne: function(table, cols, vals, cb) {
          var dbQuery = "INSERT INTO " + table;

          dbQuery += " (";
          dbQuery += cols.toString();
          dbQuery += ") ";
          dbQuery += "VALUES (";
          dbQuery += createQuestionMarks(vals.length);
          dbQuery += ") ";

          console.log(dbQuery);

          connection.query(dbQuery, vals, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
     },
     updateOne: function(table, objColVals, condition, cb) {
          var dbQuery = "UPDATE " + table;

          dbQuery += " SET ";
          dbQuery += objToSql(objColVals);
          dbQuery += " WHERE ";
          dbQuery += condition;
      
          console.log(dbQuery);
          connection.query(dbQuery, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
     },
     deleteOne: function(table, condition, cb) {
          var dbQuery = "DELETE FROM " + table;

          dbQuery += " WHERE ";
          dbQuery += condition;
      
          connection.query(dbQuery, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
     }
};

// Export the orm for the model
module.exports = orm;