import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const fortune: Command = {
    function: async (context) => {
        await context.reply(selectRandom(getMessages("fortune")));
    },
    name: "fortune",
    description: "New fortune telling service in chat! Just run this command!!",
};
