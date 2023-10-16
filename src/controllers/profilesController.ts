import AppDataSource from "../data-source";
import { Profile } from "../entity";

const profileRepository = AppDataSource.getRepository(Profile);

async function create(req, res, next) {
  console.log("hitting create");
  console.log(req.body);
  try {
    const profileData = req.body;
    const newProfile = profileRepository.create(profileData);
    await profileRepository.save(newProfile);
    res.status(201).json(newProfile);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    const prompts = await profileRepository.find();
    res.status(200).json(prompts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function details(req, res, next) {
  try {
    const { email } = req.params;
    const profile = await profileRepository.findOneOrFail({
      where: {
        id: email,
      },
    });
    res.status(200).json(profile);
    console.log(profile);
  } catch (error) {
    res.status(404).json({ error: "No profile found" });
  }
}

async function update(req, res, next) {
  try {
    const id = req.params.id;
    const updatedPrompt = req.body;
    await profileRepository.update(id, updatedPrompt);
    res.status(200).json({ message: "Successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res, next) {
  try {
    const prompt = await profileRepository.findOne({
      where: { id: req.params.id },
      relations: ["replies"],
    });

    if (prompt) {
      await profileRepository.remove(prompt);

      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(404).json({ error: "No profile found to delete" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export const profilesController = {
  create,
  // index,
  getOne: details,
  update,
  delete: destroy,
};
