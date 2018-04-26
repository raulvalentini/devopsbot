"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const userData_1 = require("../../data/userData");
const lang_1 = require("./lang");
const lib = new botbuilder_1.Library("greetings");
lib
    .dialog("firstRun", session => {
    userData_1.setFirstRun(session, true);
    session.endDialog(lang_1.default.greetings.firstRun.message);
})
    .triggerAction({
    onFindAction: (context, callback) => {
        if (!userData_1.getFirstRun(context)) {
            callback(null, 1.1);
        }
        else {
            callback(null, 0.0);
        }
    }
});
lib
    .dialog("hello", session => {
    session.endDialog(lang_1.default.greetings.hello.message);
})
    .triggerAction({
    matches: /^ciao$/i
});
exports.default = lib;
//# sourceMappingURL=index.js.map