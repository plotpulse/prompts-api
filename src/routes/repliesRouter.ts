import express from "express";
const router = express.Router({ mergeParams: true });
import { repliesController } from "../controllers/repliesController";

// INDEX
router.get("/", repliesController.index);
// CREATE
router.post("/", repliesController.create);
// SHOW/DETAILS
router.get("/:id", repliesController.getOne);
// UPDATE ONE
router.put("/:id", repliesController.update);
// DELETE
router.delete("/:id", repliesController.delete);

export default router;
