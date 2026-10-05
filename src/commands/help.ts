import type { ICommand } from "../interfaces/ICommand.js";
import { commandListString, commands } from "../utils/utils.js";

const help: ICommand = {
    function: (reply: (text: string) => void, params: string[]) => {
        if (params[0]) {
            const strCommand = params[0];
            let command: ICommand = help;
            commands.forEach(cmd => {
                if (cmd.name == strCommand) {
                    command = cmd;
                    return;
                }
            });

            reply(`/me averypuPpypgun ${command.name}: ${command.description}`);
        } else {
            reply(`/me averypuPpypgun commands: ${commandListString}`);
        }
    },
    name: "help",
    description: "A help command. Use !help <command> to work out what a command does or just !help for a list of commands"
};

export { help };