"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const EnvVars_1 = __importDefault(require("./constants/EnvVars"));
const { Host, Port, User, Password } = EnvVars_1.default.DbInfo;
exports.AppDataSource = new typeorm_1.DataSource({
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
//# sourceMappingURL=data-source.js.map