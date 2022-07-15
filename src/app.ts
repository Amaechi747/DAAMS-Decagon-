import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

const dotEnv = dotenv.config();

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import applicantsRouter from "./routes/applicants/index";
import decadevsRouter from "./routes/decadevs/index";
import adminRouter from "./routes/admin/index";

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "PATCH", "OPTIONS", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../publicmain")));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/applicants', applicantsRouter)
app.use('/decadev', decadevsRouter)
app.use('/decagon_hq/admin', adminRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === "development") {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  } else {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
});

module.exports = app;
