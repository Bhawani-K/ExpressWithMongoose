const express = require("express");
const app = express();
const connectToDB = require('./db')

connectToDB();
module.exports = app;