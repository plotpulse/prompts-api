"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    NodeEnv: process.env.NODE_ENV ?? "",
    Port: process.env.PORT ?? 0,
    DbUrl: process.env.DB_URL ?? "",
    Audience: process.env.AUDIENCE ?? "",
    IssuerBaseUrl: process.env.ISSUER_BASE_URL ?? "",
};
//# sourceMappingURL=EnvVars.js.map