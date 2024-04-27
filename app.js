import path from "path";
import express from "express";
import morgan from "morgan";
import { fileURLToPath } from "url";

import { exerciseRouter } from "./routes/exerciseRoute.js";
import { viewRouter } from "./routes/viewRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.set("view engine", "pug");

//MIDDLEWARES
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.use("/", viewRouter);
app.use("/api/exercises", exerciseRouter); //temporary route
