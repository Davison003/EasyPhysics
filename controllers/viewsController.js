const Exercise = require("../models/exerciseModel");
const catchAsync = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  const exercises = await Exercise.find();

  res.status(200).render("overview", {
    title: "Exercicios",
    exercises: exercises,
  });
});
