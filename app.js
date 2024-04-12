const path = require("path");
const express = require("express");
const morgan = require("morgan");

const exerciseRouter = require("./routes/exerciseRoute");
const viewRouter = require("./routes/viewRoute");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//MIDDLEWARES
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//  app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/", viewRouter);
app.use("/api/exercises", exerciseRouter); //temporary route

module.exports = app;
