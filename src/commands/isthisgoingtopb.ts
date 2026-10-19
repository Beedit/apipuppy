import type { Command } from "../types/interfaces/Command.js";
import { selectRandom } from "../utils/utils.js";
import { getMessages } from "../utils/messageHelper.js";

export const isthisgoingtopb: Command = {
    function: async (context) => {
        const chance = Math.floor(Math.random() * 101);
        let verdict: string;

        if (chance >= 90) {
            verdict = selectRandom(getMessages("pbHigh"));
        } else if (chance >= 50) {
            verdict = selectRandom(getMessages("pbMed"));
        } else {
            verdict = selectRandom(getMessages("pbLow"));
        }

        await context.reply(`/me ${verdict} | PB Chance: ${String(chance)}%`);
    },
    name: "pbchance",
    parameters: { aliases: ["willthispb", "isthisgoingtopb"] },
    description: "Calculates using advanced prediction mathematics (AKA Math.random()) to see if puppy will pb this run!",
};
