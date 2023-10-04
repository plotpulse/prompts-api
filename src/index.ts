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

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
