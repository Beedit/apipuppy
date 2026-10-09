import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

const isthisgoingtopb: ICommand = {
    function: async (context) => {
        const chance = Math.floor(Math.random() * 101);
        let verdict: string;

        if (chance >= 90) {
            verdict = selectRandom(messages.pbHigh);
        } else if (chance >= 50) {
            verdict = selectRandom(messages.pbMed);
        } else {
            verdict = selectRandom(messages.pbLow);
        }

        await context.reply(`/me ${verdict} | PB Chance: ${String(chance)}%`);
    },
    name: "pbchance",
    parameters: { aliases: ["willthispb", "isthisgoingtopb"] },
    description: "Calculates using advanced prediction mathematics (AKA Math.random()) to see if puppy will pb this run!",
};

export { isthisgoingtopb };
