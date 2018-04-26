import { Session } from "botbuilder";
import lang from "./lang";

// https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-dialog-overview#default-dialog
// Called whenever the dialog stack is empty and no other dialog triggered.
export default [
// export const defaultDialog = [
  (session: Session) => {
    session.endDialog(lang.default.message);
  }
];
