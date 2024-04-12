const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Exercise = require("../../models/exerciseModel");

dotenv.config({ path: "./../../config.env" });

const DB = process.env.DATABASE.replace(
  "<USERNAME>",
  process.env.DB_USERNAME
).replace("<PASSWORD>", process.env.DB_PASSWORD);

async function dbConnect() {
  await mongoose.connect(DB).then((conn) => {
    console.log("DB connection successful!");
    // console.log(conn.connection.db);
  });
}

dbConnect().catch((error) => {
  console.log(error);
});

/// Reading json file
const exercises = JSON.parse(
  fs.readFileSync(`${__dirname}/exercises.json`, "utf-8")
);

// Importing data to DB
const importData = async () => {
  try {
    await Exercise.create(exercises);
    console.log("Data loaded to db");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete all data from Collection
const deleteData = async () => {
  try {
    await Exercise.deleteMany();
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
