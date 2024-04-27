import express from "express";
import fs from "fs";
import { getExercise } from "../controllers/viewsController.js";

export const viewRouter = express.Router();

viewRouter.get("/", (req, res) => {
  const overview = fs.readFileSync("../public/index.html", "utf8");

  res.send(overview);
});

viewRouter.get("/exercise/:slug", getExercise);
