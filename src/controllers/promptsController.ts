import { AppDataSource } from "../data-source";
import { Prompt, Reply } from "../entity";

const promptRepository = AppDataSource.getRepository(Prompt);
const replyRepository = AppDataSource.getRepository(Reply);

async function create(req, res, next) {
  try {
    const promptData = req.body;
    const newPrompt = promptRepository.create(promptData);
    await promptRepository.save(newPrompt);
    res.status(201).json(newPrompt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    const prompts = await promptRepository.find();
    res.status(200).json(prompts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  create,
  index,
};
