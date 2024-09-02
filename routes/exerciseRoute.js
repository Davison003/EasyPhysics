import express from "express";

import {
  getAllExercises,
  getExercise,
  updateExercise,
} from "../controllers/exerciseController.js";

export const exerciseRouter = express.Router();

exerciseRouter.route("/").get(getAllExercises);

exerciseRouter.route("/exercise/:slug").get(getExercise).patch(updateExercise);
