import AppDataSource from "../data-source";
import { Prompt } from "../entity";

const promptRepository = AppDataSource.getRepository(Prompt);

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

async function details(req, res, next) {
  try {
    const { id } = req.params;
    const prompt = await promptRepository.findOneOrFail({
      where: {
        id: id,
      },
      relations: ["replies"],
    });
    res.status(200).json(prompt);
    console.log(prompt);
  } catch (error) {
    res.status(404).json({ error: "No prompt found" });
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    console.log(id);
    const updatedPrompt = req.body;
    await promptRepository.update(id, updatedPrompt);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res, next) {
  try {
    const result = await promptRepository.delete(req.params.id);
    if (result.affected > 0) {
      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(404).json({ error: "No prompt found to delete" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const promptsController = {
  create,
  index,
  getOne: details,
  update,
  delete: destroy,
};
