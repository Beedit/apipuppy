import * as fs from "node:fs";
import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import json5 from "json5";

const messages = json5.parse(fs.readFileSync("./src/data/wheatley.json5", "utf8"));

const wheatley: ICommand = {
    function: (reply: (text: string) => void) => {
        reply(selectRandom(messages.wheatley));
    },
    name: "wheatley",
    parameters: { aliases: ["wheat", "wheatle"] },
    description: "Say a random quote from Wheatley!"
};
export { wheatley };