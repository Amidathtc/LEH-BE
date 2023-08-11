import express from "express";
import {
  createAuth,
  getAuth,
  getOneAuth,
  signinAuth,
} from "../controller/authController";

const router = express.Router();

router.route("/create").post(createAuth);
router.route("/sign-in").post(signinAuth);
router.route("/read").get(getAuth);
router.route("/:authID/read").get(getOneAuth);

export default router;
