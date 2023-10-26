import express from "express";
const router = express.Router();

import { starsController } from "../controllers/starsController";


// INDEX
router.get("/", starsController.index);
// CREATE
router.post("/", starsController.create);
// SHOW/DETAILS
router.get("/:id", starsController.getOne);
// UPDATE ONE
router.put("/:id", starsController.update);
// DELETE
router.delete("/:id", starsController.delete);


export default router;
