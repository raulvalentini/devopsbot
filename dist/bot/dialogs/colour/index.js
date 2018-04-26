"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const botbuilder_1 = require("botbuilder");
const util_1 = require("util");
const userData_1 = require("../../data/userData");
const lang_1 = require("./lang");
const lib = new botbuilder_1.Library("colour");
lib
    .dialog("setFavourite", [
        session => {
        session.sendTyping();
        botbuilder_1.Prompts.choice(session, lang_1.default.colour.setFavourite.prompt, lang_1.default.colour.setFavourite.colours, {
            listStyle: botbuilder_1.ListStyle.auto,
            retryPrompt: lang_1.default.colour.setFavourite.retryPrompt
        });
    },
    (session, result) => __awaiter(this, void 0, void 0, function* () {
        const chosenColor = result.response.entity;
        userData_1.setColour(session, chosenColor);
        const message = util_1.format(lang_1.default.colour.setFavourite.selection, chosenColor);
        session.endDialog(message);
    })
])
    .triggerAction({
    matches: /^setFavourite$/i
});
lib
    .dialog("getFavourite", [
        session => {
        session.sendTyping();
        const chosenColor = userData_1.getColour(session);
        let message = lang_1.default.colour.getFavourite.noFavourite;
        if (chosenColor !== undefined) {
            message = util_1.format(lang_1.default.colour.getFavourite.favourite, chosenColor);
        }
        session.endDialog(message);
    }
])
    .triggerAction({
    matches: /^getFavourite$/i
});
exports.default = lib;
//# sourceMappingURL=index.js.map