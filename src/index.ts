import "./prestart"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "./constants/EnvVars";
import server from "./server";
import "reflect-metadata";
import AppDataSource from "./data-source";
import { Prompt } from "./entity";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    // const promptRepository = AppDataSource.getRepository(Prompt)
    // const prompt = new Prompt()
    // prompt.content = "A warlock, a rouge, an artificer all walk into a bar..."

    // async function savePrompt(){
    //     await promptRepository.save(prompt)
    //     console.log("Saved")
    // }
    
    // async function allPrompts(){
    //     const result = await promptRepository.find()
    //     console.log(result)
    // }
    
    // savePrompt()
    
    // allPrompts()


  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  




