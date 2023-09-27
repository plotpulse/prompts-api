"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const ts_command_line_args_1 = require("ts-command-line-args");
const args = (0, ts_command_line_args_1.parse)({
    env: {
        type: String,
        defaultValue: 'development',
        alias: 'e',
        optional: true
    },
});
const result2 = dotenv_1.default.config({});
//# sourceMappingURL=prestart.js.map