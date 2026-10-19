import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const wheatley: Command = {
    function: async (context) => {
        await context.reply(selectRandom(getMessages("wheatley")));
    },
    name: "wheatley",
    parameters: { aliases: ["wheat", "wheatle"] },
    description: "Say a random quote from Wheatley!",
};
