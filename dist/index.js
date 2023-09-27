"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./prestart"); // Must be the first import
const jet_logger_1 = __importDefault(require("jet-logger"));
const EnvVars_1 = __importDefault(require("./constants/EnvVars"));
const server_1 = __importDefault(require("./server"));
// **** Run **** //
const SERVER_START_MSG = ('Express server started on port: ' +
    EnvVars_1.default.Port.toString());
server_1.default.listen(EnvVars_1.default.Port, () => jet_logger_1.default.info(SERVER_START_MSG));
//# sourceMappingURL=index.js.map