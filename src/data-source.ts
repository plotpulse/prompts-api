import { DataSource } from "typeorm";
import EnvVars from "./constants/EnvVars";

const { DbUrl } = EnvVars

const AppDataSource = new DataSource({
  type: "postgres",
  url: DbUrl,
  synchronize: true,
  logging: false,
  entities: ["dist/entity/**/*.js"],
  migrations: ["dist/migration/**/*.js"],
  subscribers: ["dist/subscriber/**/*.js"],
});

export default AppDataSource;


// const { Host, Port, User, Password } = EnvVars.DbInfo;

// export const AppDataSource = new DataSource({
//   type: "mssql",
//   host: Host,
//   port: Number(Port),
//   username: User,
//   password: Password,
//   database: "plotpulse",
//   options: {
//     encrypt: true, 
//     trustServerCertificate: false, 
//   },
//   synchronize: true,
//   logging: false,
//   entities: ["src/entity/**/*.ts"],
//   migrations: ["src/migration/**/*.ts"],
//   subscribers: ["src/subscriber/**/*.ts"],
// });