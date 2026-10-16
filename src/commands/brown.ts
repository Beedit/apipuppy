import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const brown: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.brown));
    },
    name: "brown",
    parameters: { aliases: ["poop", "shit"] },
    description: "Celebrate a brown split with us!",
};
