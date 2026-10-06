import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";

const freakyMessages = [
    "im a freaky freaky freak freak uwu",
    "please give me message ideas for this bot",
];

const freak: ICommand = {
    function: (reply: (text: string) => void) => {
        reply(selectRandom(freakyMessages));
    },
    name: "freak",
    description: "Puppy gets freaky on it!"
    parameters: { aliases: ["joi", "freaky"] },
};
export { freak };