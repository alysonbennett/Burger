const router = require('express').Router();
// Import the model to use the database functions
var burger = require("../models/burger.js");

// All routes and logic
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

module.exports = router