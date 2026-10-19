import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const freak: Command = {
    function: async (context) => {
        const r = Math.random();

        if (r <= 0.001) {
            await context.reply("Mods. ban this guy.");
            await context.say(`/timeout ${context.userDisplayName} 60`);
        } else {
            await context.reply(selectRandom(getMessages("freaky")));
        }
    },
    name: "freak",
    parameters: { aliases: ["joi", "freaky"] },
    description: "Puppy gets freaky on it!",
};
