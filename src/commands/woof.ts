import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

const woof: ICommand = {
    function: (reply: (text: string) => void) => {
        reply(selectRandom(messages.woof));
    },
    name: "woof",
    parameters: { aliases: ["puppy", "dog"] },
    description: "*awoo's at you*",
};

export { woof };
