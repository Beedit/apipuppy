import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const gold: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.gold));
    },
    name: "gold",
    description: "Celebrate a gold split with us!",
};
