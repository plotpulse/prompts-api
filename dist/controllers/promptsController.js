"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.index = exports.create = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const entity_1 = require("../entity");
const promptRepository = data_source_1.default.getRepository(entity_1.Prompt);
const replyRepository = data_source_1.default.getRepository(entity_1.Reply);
async function create(req, res, next) {
    try {
        const promptData = req.body;
        const newPrompt = promptRepository.create(promptData);
        await promptRepository.save(newPrompt);
        res.status(201).json(newPrompt);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
exports.create = create;
async function index(req, res, next) {
    try {
        const prompts = await promptRepository.find();
        res.status(200).json(prompts);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
exports.index = index;
async function getOne(req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        const prompt = await promptRepository.findOneOrFail({
            where: {
                id: id
            }
        });
        res.status(200).json(prompt);
        console.log(prompt);
    }
    catch (error) {
        console.log('No prompt found');
    }
}
exports.getOne = getOne;
//# sourceMappingURL=promptsController.js.map