var express = require("express");

var router = express.Router();

// Import the model (buger.js) to use its database functions.
var cat = require("../models/burger.js");

module.exports = router;
