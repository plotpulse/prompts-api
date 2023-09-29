"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const promptsController_1 = require("../controllers/promptsController");
// INDEX
router.get("/", promptsController_1.promptsController.index);
// CREATE
router.post("/", promptsController_1.promptsController.create);
// SHOW/DETAILS
router.get("/:id", promptsController_1.promptsController.getOne);
// UPDATE ONE
router.put("/:id", promptsController_1.promptsController.update);
// DELETE
router.delete("/:id", promptsController_1.promptsController.delete);
module.exports = router;
//# sourceMappingURL=promptsRouter.js.map