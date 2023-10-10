import AppDataSource from "../data-source";
import { Profile } from "../entity";

const profileRepository = AppDataSource.getRepository(Profile)

async function create(req, res, next){
    console.log('hitting create')
    console.log(req.body)
    try {
        const profileData = req.body;
        const newProfile = profileRepository.create(profileData);
        await profileRepository.save(newProfile);
        res.status(201).json(newProfile);
      } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message });
      }
}

async function details(req, res, next){
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


export const profilesController = {
    create,
    // index,
    getOne: details,
    // update,
    // delete: destroy,
  };