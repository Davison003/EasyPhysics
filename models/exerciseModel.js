const moongose = require("moongose");

const exerciseSquema = new mongoose.Squema({
  name: "Exercise",
  version: 0,
  collection: "exercises",
  fields: {
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
        values: [0, 1, 2],
        message: "Difficulty must be between 0 (Easy) and 2 (Hard)",
      },
    },
  },
});

const Exercise = moongose.model("Exercise", exerciseSquema);

module.exports = Exercise;
