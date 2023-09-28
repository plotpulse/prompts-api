"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const EnvVars_1 = __importDefault(require("./constants/EnvVars"));
const { DbUrl } = EnvVars_1.default;
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
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: DbUrl,
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
});
//# sourceMappingURL=data-source.js.map