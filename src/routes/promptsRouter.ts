import { promptsController } from "../controllers/promptsController";
import repliesRouter from "./repliesRouter";
import starsRouter from "./starsRouter";
import express from "express";
const router = express.Router();

// INDEX
router.get("/", promptsController.index);
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
router.use("/:id/stars", starsRouter);

export default router;
