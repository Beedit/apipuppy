import type { ICommand } from "../interfaces/ICommand.js";

const discord: ICommand = {
    function: async (context) => {
        await context.announce("Discord: https://discord.gg/jXTyas5p2h", "green");
    },
    name: "discord",
    description: "Averypuppy's community discord link!",
};

export { discord };
