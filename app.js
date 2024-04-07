const express = require("express");
const morgan = require("morgan");

const exerciseRouter = require("./routes/exerciseRoute");

const app = express();

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
//  app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/v1/exercises", exerciseRouter); //temporary route

module.exports = app;
