import AppDataSource from "../data-source";
import { Profile } from "../entity";

const profileRepository = AppDataSource.getRepository(Profile);

async function create(req, res, next) {
  console.log("hitting create");
  console.log(req.body);
  try {
    //ideally, we should validate that the object matches our expected type before saving it to the database
    
    const profileData = req.body;

    // this just checks that email contains something for right now
    if (profileData.id === '') throw new Error('No email provided')
    const newProfile = profileRepository.create(profileData);
    res.status(201).json(await profileRepository.save(newProfile));
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

async function index(req, res, next) {
  try {
    const profiles = await profileRepository.find();
    res.status(200).json(profiles);
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
    const { email } = req.params;
    const updatedProfile = req.body;
    res.status(200).json(await profileRepository.update(email, updatedProfile));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res, next) {
  try {
    const profile = await profileRepository.findOne({
      where: { id: req.params.id },
      relations: ["replies"],
    });

    if (profile) {
      await profileRepository.remove(profile);

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
