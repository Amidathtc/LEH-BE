import { Request, Response } from "express";
import { HTTP, mainError } from "../error/mainError";
import authModel from "../model/authModel";

export const createAuth = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const auth = await authModel.create({
      name,
      email,
    });

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

export const getAuth = async (req: Request, res: Response) => {
  try {
    const auth = await authModel.find();

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

export const signinAuth = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const auth = await authModel.findOne({ email });

    res.status(HTTP.OK).json({
      message: "Sign in",
      data: auth!._id,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};

export const getOneAuth = async (req: Request, res: Response) => {
  try {
    const { authID } = req.params;

    const auth = await authModel.findById(authID);

    res.status(HTTP.OK).json({
      message: "found one",
      data: auth,
    });
  } catch (error) {
    res.status(HTTP.BAD).json({
      message: "Error",
    });
  }
};
