import type { ICommand } from "../interfaces/ICommand.js";
import { obs } from "../utils/obs.js";

const endStream: ICommand = {
    function: async (context) => {
        const r = Math.random();

        if (r <= 0.0001) {
            await obs.call("StopStream");
        } else {
            await context.reply("Sorry, but you can't end the stream :c");
        }
    },
    name: "stopstreaming",
    description: "1/10000 chance to end stream outright. ",
};

export { endStream };
