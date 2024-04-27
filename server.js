import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
import { app } from "./app.js";

const DB = process.env.DATABASE.replace(
  "<USERNAME>",
  process.env.DB_USERNAME
).replace("<PASSWORD>", process.env.DB_PASSWORD);

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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
