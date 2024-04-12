const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Exercise must have a name/title"],
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  alternatives: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
    enum: {
      values: [1, 2, 3],
      message: "Difficulty must be between 1 (Easy) and 3 (Hard)",
    },
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
