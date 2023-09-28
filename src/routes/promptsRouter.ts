import express from "express";
const router = express.Router();
import * as promptsController from "../controllers/promptsController";

// INDEX
router.get("/", promptsController.index);
// CREATE
router.post("/", promptsController.create);
// SHOW/DETAILS
// router.get("/:id", promptsController.getOne);
// // DELETE
// router.delete("/:id", promptsController.delete);

module.exports = router;
