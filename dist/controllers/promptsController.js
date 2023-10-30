"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptsController = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const entity_1 = require("../entity");
const promptRepository = data_source_1.default.getRepository(entity_1.Prompt);
const replyRepository = data_source_1.default.getRepository(entity_1.Reply);
const profileRepository = data_source_1.default.getRepository(entity_1.Profile);
async function create(req, res, next) {
    try {
        const promptData = req.body;
        const profile = await profileRepository.findOneOrFail({
            where: {
                id: promptData.user
            }
        });
        if (!profile) {
            throw new Error('No user profile found.');
        }
        promptData.user = profile;
        const newPrompt = promptRepository.create(promptData);
        res.status(201).json(await promptRepository.save(newPrompt));
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
async function index(req, res, next) {
    try {
        const prompts = await promptRepository.find({
            relations: ['user', 'stars']
        });
        res.status(200).json(prompts);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
async function details(req, res, next) {
    try {
        const { id } = req.params;
        const prompt = await promptRepository.findOneOrFail({
            where: {
                id: id,
            },
            relations: ["replies", "user", "stars"],
        });
        res.status(200).json(prompt);
        console.log(prompt);
    }
    catch (error) {
        res.status(404).json({ error: "No prompt found" });
    }
}
async function update(req, res, next) {
    try {
        const id = req.params.id;
        console.log(id);
        const updatedPrompt = req.body;
        res.status(200).json(await promptRepository.update(id, updatedPrompt));
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
async function destroy(req, res, next) {
    try {
        const prompt = await promptRepository.findOne({
            where: { id: req.params.id },
            relations: ["replies"]
        });
        if (prompt) {
            await Promise.all(prompt.replies?.map(async (reply) => {
                await replyRepository.remove(reply);
            }));
            await promptRepository.remove(prompt);
            res.status(200).json({ message: "Successfully deleted" });
        }
        else {
            res.status(404).json({ error: "No prompt found to delete" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}
exports.promptsController = {
    create,
    index,
    getOne: details,
    update,
    delete: destroy,
};
//# sourceMappingURL=promptsController.js.map