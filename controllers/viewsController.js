const Exercise = require("../models/exerciseModel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/apiFeatures");

exports.sortByDifficultyAsc = (req, res, next) => {
  req.query.sort = "difficulty,name";
  next();
};

exports.sortByDifficultyDesc = (req, res, next) => {
  req.query.sort = "-difficulty,name";
  next();
};

exports.getOverview = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Exercise.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const exercises = await features.query;

  res.status(200).render("overview", {
    title: "Home",
    exercises,
  });
});
