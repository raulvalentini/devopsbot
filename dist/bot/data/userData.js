"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getColour(session) {
    return session.userData.colour;
}
exports.getColour = getColour;
function setColour(session, colour) {
    session.userData.colour = colour;
}
exports.setColour = setColour;
function getFirstRun(context) {
    return context.userData.firstRun;
}
exports.getFirstRun = getFirstRun;
function setFirstRun(session, shown) {
    session.userData.firstRun = shown;
}
exports.setFirstRun = setFirstRun;
//# sourceMappingURL=userData.js.map