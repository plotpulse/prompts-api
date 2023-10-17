import { repliesController } from "../controllers/repliesController";
import express from "express";
const router = express.Router({ mergeParams: true });

// INDEX
router.get("/", repliesController.index);
// CREATE
router.post("/", repliesController.create);
// SHOW/DETAILS
router.get("/:replyId", repliesController.getOne);
// UPDATE ONE
router.put("/:replyId", repliesController.update);
// DELETE
router.delete("/:replyId", repliesController.delete);

export default router;
