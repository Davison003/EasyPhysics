const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

async function dbConnect() {
  await mongoose.connect(DB).then(() => {
    console.log("DB connection successful!");
    // console.log(con.connection);
  });
}

dbConnect().catch((error) => {
  console.log(error);
});

//STARTING SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
