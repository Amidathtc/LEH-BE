import cors from "cors";
import express, { Request, Response, Application, NextFunction } from "express";
import { HTTP, mainError } from "./error/mainError";
import { errorHandler } from "./error/errorBuilder";
import auth from "./router/authRouter";
import task from "./router/taskRouter";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    }),
  );

  // app.use("/", (req: Request, res: Response) => {
  //   try {
  //     return res.status(HTTP.OK).json({
  //       message: "Good to Go!",
  //     });
  //   } catch (error) {
  //     return res.status(HTTP.BAD).json({ message: "Error" });
  //   }
  // });

  app.use("/api/v1", auth);
  app.use("/api/v1", task);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    new mainError({
      name: "Route Error",
      message: "This is showing up because this Route isn't correct",
      status: HTTP.BAD,
      success: false,
    });
  });

  app.use(errorHandler);
};
