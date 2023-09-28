const { Prompt } = require("../entities");

async function create(req, res, next) {
  try {
    const PromptData = req.body;
    res.status(201).json(await Prompt.create(PromptData));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    res.status(200).json(await Prompt.find());
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  create,
  index,
};
