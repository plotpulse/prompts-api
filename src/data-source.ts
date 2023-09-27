import { DataSource } from "typeorm";
import EnvVars from "./constants/EnvVars";

const { Host, Port, User, Password } = EnvVars.DbInfo;

export const AppDataSource = new DataSource({
  type: "mssql",
  host: Host,
  port: Number(Port),
  username: User,
  password: Password,
  database: "plotpulse",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
