import express from "express";
import {
  addTask,
  getAllTask,
  completeTask,
  undoTask,
  deleteTask
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/addTask", addTask);
router.get("/getAllTask", getAllTask);
router.post("/completeTask/:id", completeTask);
router.post("/undo/:id", undoTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;
