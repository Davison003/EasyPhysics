const Exercise = require("../models/exerciseModel");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.getAllExercises = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Exercise.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const exercises = await features.query;

  res.status(200).json({
    status: "success",
    results: exercises.length,
    data: {
      exercises: exercises,
    },
  });
});

exports.getExercise = catchAsync(async (req, res) => {
  const exercise = await Exercise.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      exercise: exercise,
    },
  });
});

exports.updateExercise = catchAsync(async (req, res) => {
  const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      exercise: exercise,
    },
  });
});
