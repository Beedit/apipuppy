import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

const isthisgoingtopb: ICommand = {
    function: (reply: (text: string) => void) => {
        const chance = Math.floor(Math.random() * 101);
        let verdict: string;

        if (chance >= 90) {
            verdict = String(selectRandom(messages.pbHigh));
        } else if (chance >= 50) {
            verdict = String(selectRandom(messages.pbMed));
        } else {
            verdict = String(selectRandom(messages.pbLow));
        }

        reply(`/me ${verdict} | PB Chance: ${chance}%`);
    },
    name: "pbchance",
    parameters: { aliases: ["willthispb", "isthisgoingtopb"] },
    description: "Calculates using advanced prediction mathematics (AKA Math.random()) to see if puppy will pb this run!",
};

export { isthisgoingtopb };
