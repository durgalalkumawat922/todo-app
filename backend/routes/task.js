import express from "express";
import { addTask, getAllTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/addTask", addTask);
router.get("/getAllTask", getAllTask);

router.post("/addTask", getAllTask);

export default router;
