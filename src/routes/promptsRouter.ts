const express = require("express");
const router = express.router();
const promptsController = require("../controllers/promptsController");

// INDEX
router.get("/", promptsController.index);
// CREATE
router.post("/", promptsController.create);
// SHOW/DETAILS
router.get("/:id", promptsController.getOne);
// DELETE
router.delete("/:id", promptsController.delete);

module.exports = router;
