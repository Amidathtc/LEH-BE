import { Request, Response } from "express";
import { HTTP, mainError } from "../error/mainError";
import taskModel from "../model/todoModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { task } = req.body;

    const auth = await taskModel.create({
      task,
      userID,
    });

    console.log(auth);

    res.status(HTTP.OK).json({
      message: "created",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const auth = await taskModel.find();

    res.status(HTTP.OK).json({
      message: "found",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;

    const auth = await taskModel.findByIdAndDelete(taskID);

    res.status(HTTP.OK).json({
      message: "delete one",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};
