import express from "express";
const router = express.Router();

import { starsController } from "../controllers/starsController";



// CREATE
router.post("/", starsController.create);
// SHOW/DETAILS
router.get("/:id", starsController.getOne);

// DELETE
router.delete("/:id", starsController.delete);


export default router;
