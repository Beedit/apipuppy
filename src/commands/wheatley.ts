import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const wheatley: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.wheatley));
    },
    name: "wheatley",
    parameters: { aliases: ["wheat", "wheatle"] },
    description: "Say a random quote from Wheatley!",
};
