import type { ICommand } from "../utils/interface/ICommand.js";
import { commandListString } from "../utils/utils.js";

const help: ICommand = {
    function: (reply: Function) => {
        reply(`averypuPpypgun apipuppy commands: ${commandListString}`)
    },
    name: "help"
}

export { help }