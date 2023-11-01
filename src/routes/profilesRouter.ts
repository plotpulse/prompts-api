import { profilesController } from "../controllers/profilesController";
import checkJwt from "../services/checkJwt";
import express from "express";
const router = express.Router();

// CREATE
router.post("/", profilesController.create);
// SHOW/DETAILS
router.get("/:email", checkJwt, profilesController.getOne);

export default router;
