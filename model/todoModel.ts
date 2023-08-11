import mongoose from "mongoose";

interface iAuth {
  task: string;
  userID: string;
}

interface iAuthData extends iAuth, mongoose.Document {}

const taskModel = new mongoose.Schema<iAuth>(
  {
    task: {
      type: String,
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iAuthData>("tasks", taskModel);
