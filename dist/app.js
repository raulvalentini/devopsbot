"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const bot_1 = require("./bot");
const StatusError_1 = require("./shared/errors/StatusError");
const app = express();
app.use(helmet());
app.use(compression());
app.disable('x-powered-by');
app.post("/api/kp/messages", bot_1.default.listen());
app.use((_req, _res, next) => {
    next(new StatusError_1.default("Not Found", 404));
});
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.send();
});
exports.default = app;
//# sourceMappingURL=app.js.map