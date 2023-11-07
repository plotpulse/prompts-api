"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptsController_1 = require("../controllers/promptsController");
const repliesRouter_1 = __importDefault(require("./repliesRouter"));
const starsRouter_1 = __importDefault(require("./starsRouter"));
const checkJwt_1 = __importDefault(require("../services/checkJwt"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// INDEX
router.get("/", promptsController_1.promptsController.index);
// CREATE
router.post("/", checkJwt_1.default, promptsController_1.promptsController.create);
// SHOW/DETAILS
router.get("/:id", checkJwt_1.default, promptsController_1.promptsController.getOne);
// UPDATE ONE
router.put("/:id", checkJwt_1.default, promptsController_1.promptsController.update);
// DELETE
router.delete("/:id", checkJwt_1.default, promptsController_1.promptsController.delete);
// Nested replies routes:
router.use("/:id/replies", checkJwt_1.default, repliesRouter_1.default);
router.use("/:id/stars", checkJwt_1.default, starsRouter_1.default);
exports.default = router;
//# sourceMappingURL=promptsRouter.js.map