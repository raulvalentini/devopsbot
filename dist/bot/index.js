"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const settings_1 = require("../settings");
const colour_1 = require("./dialogs/colour");
const default_1 = require("./dialogs/default");
const global_1 = require("./dialogs/global");
const greetings_1 = require("./dialogs/greetings");
const storage_1 = require("./storage");
const connector = new botbuilder_1.ChatConnector({
    appId: settings_1.appId,
    appPassword: settings_1.appPassword
});
const bot = new botbuilder_1.UniversalBot(connector, default_1.default);
bot.set("storage", storage_1.default);
bot.library(global_1.default.clone());
bot.library(colour_1.default.clone());
bot.library(greetings_1.default.clone());
exports.default = connector;
//# sourceMappingURL=index.js.map