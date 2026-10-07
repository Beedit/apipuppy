import * as fs from "node:fs";
import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js";
import json5 from "json5";

const messages = json5.parse(fs.readFileSync("./src/data/messages.json5", "utf8"));

const gg: ICommand = {
    function: (reply: (text: string) => void) => {
        reply(selectRandom(messages.gg));
    },
    name: "gg",
    description: "Say gg!"
};
export { gg };