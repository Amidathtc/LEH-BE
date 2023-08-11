import express, { Application } from "express";
import mongoose from "mongoose";
import { mainApp } from "./mainApp";

const app: Application = express();
const port: number = 5599;

const url = "mongodb://127.0.0.1:27017/testClassDB";


mainApp(app);

const server = app.listen(port, () => {
  mongoose.connect(url).then(() => {
    console.log("connected");
  });
});

process.on("uncaughtException", (Error: any) => {
  console.log("uncaughtException");

  process.exit(1);
});

process.on("unhandledRejection", (Reason: any) => {
  console.log("unhandledRejection");

  server.close(() => {
    process.exit(1);
  });
});
