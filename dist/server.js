"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const http_1 = require("http");
const app_1 = require("./app");
const settings_1 = require("./settings");
const log = debug("server");
app_1.default.set("port", settings_1.port);
const server = http_1.createServer(app_1.default);
server.listen(settings_1.port);
server.on("error", onError);
server.on("listening", onListening);
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof settings_1.port === "string" ? "Pipe " + settings_1.port : "Port " + settings_1.port;
    switch (error.code) {
        case "EACCES":
            log(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            log(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    log("Listening on " + bind);
}
//# sourceMappingURL=server.js.map