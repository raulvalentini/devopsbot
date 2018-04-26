"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const lang_1 = require("./lang");
const lib = new botbuilder_1.Library("global");
lib
    .dialog("help", (session) => {
    session.endDialog(lang_1.default.global.help.message);
})
    .triggerAction({
    matches: /^help$/i
});
exports.default = lib;
//# sourceMappingURL=index.js.map