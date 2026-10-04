import type { ICommand } from "../interfaces/ICommand.js";
import { commandListString } from "../utils/utils.js";

const help: ICommand = {
    function: (reply: Function) => {
        reply(`/me averypuPpypgun commands: ${commandListString}`)
    },
    name: "help"
}

export { help }