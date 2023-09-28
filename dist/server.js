"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const { Request, Response, NextFunction } = express_1.default;
const createError = require("http-errors");
const cors = require("cors");
const promptsRouter = require("./routes/promptsRouter.js");
/////////////
const app = (0, express_1.default)();
app.set("view engine", "ejs");
/////////////////
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors());
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
// routers
app.use("/prompts", promptsRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});
exports.default = app;
//# sourceMappingURL=server.js.map