import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

export const fortune: Command = {
    function: async (context) => {
        await context.reply(selectRandom(messages.fortune));
    },
    name: "fortune",
    description: "New fortune telling service in chat! Just run this command!!",
};
