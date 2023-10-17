import { profilesController } from "../controllers/profilesController";
import express from "express";
const router = express.Router();

// CREATE
router.post("/", profilesController.create);
// SHOW/DETAILS
router.get("/:email", profilesController.getOne);

export default router;
