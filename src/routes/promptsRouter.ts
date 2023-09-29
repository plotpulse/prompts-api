import express from "express";
const router = express.Router();
import { promptsController } from "../controllers/promptsController";

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

module.exports = router;
