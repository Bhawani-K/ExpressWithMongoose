const express = require("express");
const app = express();
const connectToDB = require('./db')
const userRoutes = require('./routes/userRoutes')

// Initialize the connection to Db
connectToDB();

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

module.exports = app;