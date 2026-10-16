import type { Command } from "../types/interfaces/Command.js";

export const discord: Command = {
    function: async (context) => {
        await context.reply("Discord: https://discord.gg/jXTyas5p2h");
    },
    name: "discord",
    description: "Averypuppy's community discord link!",
};
