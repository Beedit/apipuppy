import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import messages from "../data/messages.json" with { type: "json" };

const wheatley: ICommand = {
    function: (reply: (text: string) => void) => {
        reply(selectRandom(messages.wheatley));
    },
    name: "wheatley",
    parameters: { aliases: ["wheat", "wheatle"] },
    description: "Say a random quote from Wheatley!",
};
export { wheatley };
