import { IPromptChoiceResult, Library, ListStyle, Prompts } from "botbuilder";
import { format } from "util";
import { getColour, setColour } from "../../data/userData";
import lang from "./lang";


const lib = new Library("colour");

lib
  .dialog("setFavourite", [
    session => {
      session.sendTyping();

      Prompts.choice(
        session,
        lang.colour.setFavourite.prompt,
        lang.colour.setFavourite.colours,
        {
          listStyle: ListStyle.auto,
          retryPrompt: lang.colour.setFavourite.retryPrompt
        }
      );
    },
    async (session, result: IPromptChoiceResult) => {
      // Removing undefined as choice prompt will ensure value.
      const chosenColor = result.response!.entity;

      setColour(session, chosenColor);

      const message = format(
        lang.colour.setFavourite.selection,
        chosenColor
      );

      session.endDialog(message);
    }
  ])
  .triggerAction({
    matches: /^setFavourite$/i
  });

lib
  .dialog("getFavourite", [
    session => {
      session.sendTyping();

      const chosenColor = getColour(session);

      let message = lang.colour.getFavourite.noFavourite;

      if (chosenColor !== undefined) {
        message = format(lang.colour.getFavourite.favourite, chosenColor);
      }

      session.endDialog(message);
    }
  ])
  .triggerAction({
    matches: /^getFavourite$/i
  });

  export default lib;
