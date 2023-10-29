import express from "express";
const router = express.Router();

import { starsController } from "../controllers/starsController";



// CREATE
router.post("/", starsController.create);
// SHOW/DETAILS
router.get("/:starId", starsController.getOne);
// INDEX
router.get("/", starsController.index)

// DELETE
router.delete("/:starId", starsController.delete);


export default router;
