import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const gg: Command = {
    function: async (context) => {
        await context.reply(selectRandom(getMessages("gg")));
    },
    name: "gg",
    description: "Say gg!",
};
