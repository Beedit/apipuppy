import { createBotCommand, type BotCommand } from "@twurple/easy-bot";
import type { ICommand } from "./interface/ICommand.js";
import { brown } from "../commands/brown.js";
import { fortune } from "../commands/fortune.js";
import { gg } from "../commands/gg.js";
import { gold } from "../commands/gold.js";
import { help } from "../commands/help.js";
import { isthisgoingtopb } from "../commands/isthisgoingtopb.js";
import { woof } from "../commands/woof.js";

const commands = [ brown, gg, gold, fortune, isthisgoingtopb, woof, help ]

/**
 * Selects a random item from a given list.
 * @param list List of items
 * @returns Random item from the list
 */
const selectRandom = <T> (list: T[]): T | undefined => {
    return list[Math.floor(Math.random() * list.length)];
}
/**
 * Creates a single command. Helper function for createCommands. Should not be called.
 * @param command Command conforming to ICommand
 * @returns Registered command
 */
const createSoloCommand = (command: ICommand) => {
    if (!command.parameters) { command.parameters = {} }

    return createBotCommand(command.name, (_params, { reply }) => {
        command.function(reply)
    }, command.parameters);
}

/**
 * Creates commands from a list of ICommand interfaces.
 * @param commands A list of ICommands to be created.
 * @returns List of BotCommand to give to a bot.
 */
const createCommands = (commands: ICommand[]) => {
    let completedCommands: BotCommand[] = [];

    commands.forEach((command) => {
        completedCommands.push(createSoloCommand(command));
    })

    return completedCommands;
}


/**
 * Generates a string of the command names for use in the help command.
 * @param commands List of ICommands to be included in the help command
 * @returns String in the format "commandName1 commandName2 [...]"
 */
const helpCommandGeneration = (commands: ICommand[]) => {
    let string: string = "";

    commands.forEach((command) => {
        string += ` ${command.name}`
    })

    return string;
}
/**
 * String of the command names for use in the help command.
 */
const commandListString = helpCommandGeneration(commands)

export { selectRandom, createCommands, commandListString, commands }