import mongoose from "mongoose";

interface iAuth {
  name: string;
  email: string;
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel = new mongoose.Schema<iAuth>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model<iAuthData>("auths", authModel);
