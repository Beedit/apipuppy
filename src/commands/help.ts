import type { Command } from "../types/interfaces/Command.js";
import { commandListString, commands } from "../utils/utils.js";

export const help: Command = {
    function: async (context, params: string[]) => {
        if (params[0]) {
            const strCommand = params[0];
            let command: Command = help;
            commands().forEach((cmd: Command) => {
                if (cmd.name == strCommand) {
                    command = cmd;
                    return;
                }
            });

            await context.reply(`/me averypuPpypgun ${command.name}: ${command.description}`);
        } else {
            await context.reply(`/me averypuPpypgun commands: ${commandListString}`);
        }
    },
    name: "help",
    parameters: { aliases: ["commands"] },
    description: "A help command. Use !help <command> to work out what a command does or just !help for a list of commands",
};
