import AppDataSource from "../data-source";
import { Star, Profile, Prompt } from "../entity";

const starRepository = AppDataSource.getRepository(Star)
const profileRepository = AppDataSource.getRepository(Profile)
const promptRepository = AppDataSource.getRepository(Prompt)


async function create(req, res, next) {
    try {
        const starData = req.body;
        const { userId, promptId } = starData
        const profile = await profileRepository.findOneOrFail({
            where: {
                id: userId,
            }
        })
        const prompt = await promptRepository.findOneOrFail({
            where: {
                id: promptId,
            }
        })
        const newStar = {
            user: profile,
            prompt: prompt,
        }

        res.status(201).json(await starRepository.save(newStar))
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

async function destroy(req, res, next) {
    try {
        const result = await starRepository.delete(req.params.starId)

        if (result.affected > 0){
            res.status(200).json(result)
        } else {
            throw new Error('No star found to delete')
        }
        
    } catch (error) {
        res.status(404).json(error)
        
    }
}


async function details(req, res, next) {
    try {
        const { starId } = req.params

        const star = await starRepository.findOneOrFail({
            where: {
                id: starId,
            }
        })
        res.status(200).json(star)

        
    } catch (error) {
        res.status(404).json(error)
    }
}

async function index(req, res, next){

    try {
        const promptId = req.params.id
        console.log(req.params)

        const stars = await starRepository.find({
          where: {
            prompt: { id: req.params.id },
          },
          relations: ['user', 'prompt'],
        });
        console.log(stars)
        
        res.status(200).json(stars);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }

}

export const starsController = {
    create,
    getOne: details,
    delete: destroy,
    index,
}