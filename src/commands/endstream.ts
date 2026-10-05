import type { ICommand } from "../interfaces/ICommand.js";
import { obs } from "../utils/obs.js";

const endStream: ICommand = {
    function: async (reply: (text: string) => void) => {
        const r = Math.random();

        if (r <= 0.0001) {
            await obs.call("StopStream");
        } else {
            reply("Sorry, but you can't end the stream :c");
        }
    },
    name: "stopstreaming",
    description: "1/10000 chance to end stream outright. "
};

export { endStream }; 