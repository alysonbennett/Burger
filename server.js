//Dependencies
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

//Static directory
app.use(express.static("public"));

//Sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access to them
var routes = require("./controllers/burgers_controller");

app.use(routes)

// Tell server to listen on PORT 8080
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
