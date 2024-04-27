import { Exercise } from "../models/exerciseModel.js";
import { catchAsync } from "../utils/catchAsync.js";
import { APIFeatures } from "../utils/apiFeatures.js";

export const getOverview = catchAsync(async (req, res, next) => {
  console.log(req.params, req.query);
  const features = new APIFeatures(Exercise.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const exercises = await features.query;
  console.log(exercises);

  res.status(200).render("overview", {
    title: "Home",
    exercises: exercises,
  });
});

export const getExercise = catchAsync(async (req, res, next) => {
  const exercise = await Exercise.findOne({ slug: req.params.slug });
  res.status(200).render("exercise", {
    title: exercise.name,
    exercise,
  });
});
