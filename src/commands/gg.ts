import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const gg: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.gg));
    },
    name: "gg",
    description: "Say gg!",
};
