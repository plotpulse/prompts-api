import { createConnection } from "typeorm";
import EnvVars from "./constants/EnvVars";

const { DbUrl } = EnvVars;

async function testConnection() {
  try {
    const connection = await createConnection({
      type: "postgres",
      url: DbUrl,
      synchronize: true,
      logging: false,
      entities: ["dist/entity/**/*.js"],
      migrations: ["dist/migration/**/*.js"],
      subscribers: ["dist/subscriber/**/*.js"],
    });

    console.log("Successfully connected to the database.");
    await connection.close();
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

testConnection();
