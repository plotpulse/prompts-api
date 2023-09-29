import AppDataSource from "../data-source";
import { Prompt, Reply } from "../entity";

const promptRepository = AppDataSource.getRepository(Prompt);
const replyRepository = AppDataSource.getRepository(Reply);

export async function create(req, res, next) {
  try {
    const promptData = req.body;
    const newPrompt = promptRepository.create(promptData);
    await promptRepository.save(newPrompt);
    res.status(201).json(newPrompt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function index(req, res, next) {
  try {
    const prompts = await promptRepository.find();
    res.status(200).json(prompts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getOne(req, res, next){
  
  try {
    const { id } = req.params
    console.log(id)
    const prompt = await promptRepository.findOneOrFail({
      where: {
        id: id
      }
    });
    res.status(200).json(prompt)
    console.log(prompt)
  } catch (error) {
    console.log('No prompt found')
  }

}
