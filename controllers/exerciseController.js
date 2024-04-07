const Exercise = require("../models/exerciseModel");

exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        exercises: exercises,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        exercise: exercise,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateExercise = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
