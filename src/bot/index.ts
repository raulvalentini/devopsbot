import { ChatConnector, UniversalBot } from "botbuilder";
import { appId, appPassword } from "../settings";
import colour from "./dialogs/colour";
import defaultDialog from "./dialogs/default";
import global from "./dialogs/global";
import greetings from "./dialogs/greetings";
import storage from "./storage";

// Create chat connector for communicating with the Bot Framework Service
const connector = new ChatConnector({
  appId,
  appPassword
});

const bot = new UniversalBot(connector, defaultDialog);
// const bot = new UniversalBot(connector, {});
bot.set("storage", storage);
bot.library(global.clone());
bot.library(colour.clone());
bot.library(greetings.clone());

export default connector;
