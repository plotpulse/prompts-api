import promptsRouter from "./routes/promptsRouter";
import profilesRouter from "./routes/profilesRouter";
import cookieParser from "cookie-parser";
import logger from "morgan";
import express from "express";
import { request } from "http";

const { Request, Response, NextFunction } = express;
const createError = require("http-errors");
const cors = require("cors");

/////////////
const app = express();

/////////////////

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());

// routers
app.use("/prompts", promptsRouter);
app.use("/profiles", profilesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("hitting extra error");
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).json({ error: err.message });
});

export default app;
