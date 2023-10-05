import cookieParser from "cookie-parser";
import logger from "morgan";
import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import cors from "cors";
import promptsRouter from "./routes/promptsRouter";
import { auth } from "express-oauth2-jwt-bearer";

const app = express();
const port = process.env.PORT || 8080;
const audience = process.env.AUDIENCE;
const issuerBaseURL = process.env.ISSUER_BASE_URL;

const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: issuerBaseURL,
  tokenSigningAlg: "RS256",
});

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
