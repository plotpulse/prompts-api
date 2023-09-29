import AppDataSource from "../data-source";
import { Reply, Prompt } from "../entity";

const replyRepository = AppDataSource.getRepository(Reply);
const promptRepository = AppDataSource.getRepository(Prompt);

async function create(req, res, next) {
  try {
    const promptId = req.params.id;
    const prompt = await promptRepository.findOneOrFail(promptId);
    const replyData = req.body;
    const newReply = replyRepository.create({
      ...replyData,
      prompt: prompt,
    });
    await replyRepository.save(newReply);
    res.status(201).json(newReply);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    const replies = await replyRepository.find();
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
    console.log(reply);
  } catch (error) {
    res.status(404).json({ error: "No reply found" });
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.promptId;
    const updatedReply = req.body;
    await replyRepository.update(id, updatedReply);
    res.status(200).json({ message: "Successfully updated" });
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
