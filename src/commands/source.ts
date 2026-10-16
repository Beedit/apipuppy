import type { Command } from "../types/interfaces/Command.js";

export const code: Command = {
    function: async (context) => {
        return context.reply("Curious how the bot works? The source code for the bot can be found at https://github.com/Beedit/apipuppy <3");
    },
    name: "code",
    description: "Links to the source code of the bot!",
};
