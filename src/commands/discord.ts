import type { ICommand } from "../interfaces/ICommand.js";

const discord: ICommand = {
    function: async (context) => {
        await context.reply("Discord: https://discord.gg/jXTyas5p2h");
    },
    name: "discord",
    description: "Averypuppy's community discord link!",
};

export { discord };
