import express from "express";
import { createTask, getTask, deleteTask } from "../controller/taskController";

const router = express.Router();

router.route("/:userID/create-task").post(createTask);
router.route("/read-task").get(getTask);
router.route("/:taskID/delete-task").delete(deleteTask);

export default router;
