import AppDataSource from "../data-source";
import { Reply } from "../entity";

const replyRepository = AppDataSource.getRepository(Reply);

async function create(req, res, next) {
  try {
    const replyData = req.body;
    const newReply = replyRepository.create(replyData);
    console.log("hitting before await");
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
    const { id } = req.params;
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
    const id = req.params.id;
    console.log(id);
    const updatedReply = req.body;
    await replyRepository.update(id, updatedReply);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res, next) {
  try {
    const result = await replyRepository.delete(req.params.id);
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