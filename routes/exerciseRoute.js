import express from "express";

import {
  getAllExercises,
  getExercise,
  updateExercise,
} from "../controllers/exerciseController.js";

export const exerciseRouter = express.Router();

exerciseRouter.route("/").get(getAllExercises);

exerciseRouter.route("/:id").get(getExercise).patch(updateExercise);
