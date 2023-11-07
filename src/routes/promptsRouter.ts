import { promptsController } from "../controllers/promptsController";
import repliesRouter from "./repliesRouter";
import starsRouter from "./starsRouter";
import checkJwt from "../services/checkJwt";
import express from "express";
const router = express.Router();

// INDEX
router.get("/", promptsController.index);
// CREATE
router.post("/", checkJwt, promptsController.create);
// SHOW/DETAILS
router.get("/:id", checkJwt, promptsController.getOne);
// UPDATE ONE
router.put("/:id", checkJwt, promptsController.update);
// DELETE
router.delete("/:id", checkJwt, promptsController.delete);

// Nested replies routes:
router.use("/:id/replies", checkJwt, repliesRouter);
router.use("/:id/stars", checkJwt, starsRouter);

export default router;
