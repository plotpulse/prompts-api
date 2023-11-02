import AppDataSource from "../data-source";
import { Prompt, Reply, Profile } from "../entity";

const promptRepository = AppDataSource.getRepository(Prompt);
const replyRepository = AppDataSource.getRepository(Reply)
const profileRepository = AppDataSource.getRepository(Profile)

async function create(req, res, next) {
  try {
    const promptData = req.body;
    const profile = await profileRepository.findOneOrFail({
      where: {
        id: promptData.user
      }
    })
    if (!profile){
      throw new Error('No user profile found.')
    }
    promptData.user = profile
   
    const newPrompt = promptRepository.create(promptData);
    
    res.status(201).json(await promptRepository.save(newPrompt));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    const prompts = await promptRepository.find({
      relations: ['user', 'stars']
    });
    
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
      relations: ["replies", "user", "stars"],
    });
    res.status(200).json(prompt);
  } catch (error) {
    res.status(404).json({ error: "No prompt found" });
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const updatedPrompt = req.body;
    res.status(200).json(await promptRepository.update(id, updatedPrompt));
  } catch (error) {
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
      await Promise.all(prompt.replies?.map(async (reply: Reply) => {
        await replyRepository.remove(reply);
      }));
      await promptRepository.remove(prompt);
      
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
