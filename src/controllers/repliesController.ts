import AppDataSource from "../data-source";
import { Reply, Prompt, Profile } from "../entity";

const replyRepository = AppDataSource.getRepository(Reply);
const promptRepository = AppDataSource.getRepository(Prompt);
const profileRepository = AppDataSource.getRepository(Profile);

async function create(req, res, next) {
  try {
    const promptId = req.params.id;
    if (!promptId) {
      return res.status(400).json({ error: "no prompt found" });
    }
    const prompt = await promptRepository.findOneOrFail({
      where: { id: promptId },
    });
    const replyData = req.body;
    const profile = await profileRepository.findOneOrFail({
      where: {
        id: replyData.user
      }
    })
    if (!profile){
      return res.status(400).json({ error: "no profile found" })
    }


    const newReply = replyRepository.create({
      ...replyData,
      prompt: prompt,
      user: profile,
    });
    
    res.status(201).json(await replyRepository.save(newReply))
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  
  try {

    const replies = await replyRepository.find({
      where: {
        prompt: { id: req.params.id },
      },
      relations: ['user'],
    });
    res.status(200).json(replies);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function details(req, res, next) {
  try {
    const { id } = req.params.replyId;
    const reply = await replyRepository.findOneOrFail({
      where: {
        id: id,
      },
    });
    res.status(200).json(reply);
  } catch (error) {
    res.status(404).json({ error: "No reply found" });
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.replyId;
    const updatedReply = req.body;
    res.status(200).json(await replyRepository.update(id, updatedReply));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res, next) {
  try {
    const result = await replyRepository.delete(req.params.promptId);
    if (result.affected > 0) {
      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(404).json({ error: "No reply found to delete" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const repliesController = {
  create,
  index,
  getOne: details,
  update,
  delete: destroy,
};
