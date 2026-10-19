import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const gold: Command = {
    function: async (context) => {
        await context.reply(selectRandom(getMessages("gold")));
    },
    name: "gold",
    description: "Celebrate a gold split with us!",
};
