import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const woof: Command = {
    function: async (context) => {
        await context.reply(selectRandom(getMessages("woof")));
    },
    name: "woof",
    parameters: { aliases: ["puppy", "dog"] },
    description: "*awoo's at you*",
};
