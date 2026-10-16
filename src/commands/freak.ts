import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const freak: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.freaky));
    },
    name: "freak",
    parameters: { aliases: ["joi", "freaky"] },
    description: "Puppy gets freaky on it!",
};
