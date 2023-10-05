import { promptsController } from "../controllers/promptsController";
import repliesRouter from "./repliesRouter";
import express from "express";
import { jwtCheck } from "../modules/auth";

const router = express.Router();

// INDEX
router.get("/", jwtCheck, promptsController.index);
// CREATE
router.post("/", promptsController.create);
// SHOW/DETAILS
router.get("/:id", promptsController.getOne);
// UPDATE ONE
router.put("/:id", promptsController.update);
// DELETE
router.delete("/:id", promptsController.delete);
// Nested replies routes:
router.use("/:id/replies", repliesRouter);

export default router;
