const express = require("express");

const exerciseController = require("../controllers/exerciseController");

const router = express.Router();

router.route("/").get("/", exerciseController.getAllExercises);

router
  .route("/:id")
  .get(exerciseController.getExercise)
  .patch(exerciseController.updateExercise);

module.exports = router;
