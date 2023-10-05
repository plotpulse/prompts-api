import cookieParser from "cookie-parser";
import logger from "morgan";
import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import cors from "cors";
import promptsRouter from "./routes/promptsRouter";

const app = express();

// Middleware //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.use(cookieParser());

// Routers //
app.use("/prompts", promptsRouter);

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
