import express from "express";
const router = express.Router();
import { profilesController } from "../controllers/profilesController";


// CREATE
router.post("/", profilesController.create);
// SHOW/DETAILS
router.get("/:email", profilesController.getOne);