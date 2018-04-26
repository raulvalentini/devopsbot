import { Library, Session } from "botbuilder";
import lang from "./lang";

const lib = new Library("global");

lib
  .dialog("help", (session: Session) => {
    session.endDialog(lang.global.help.message);
  })
  .triggerAction({
    matches: /^help$/i
  });

export default lib;
// export const global:Library = lib;
