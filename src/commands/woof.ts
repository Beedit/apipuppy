import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const woof: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.woof));
    },
    name: "woof",
    parameters: { aliases: ["puppy", "dog"] },
    description: "*awoo's at you*",
};
