import type { Command } from "../types/interfaces/Command.js";

export const lurk: Command = {
    function: async (context) => {
        await context.reply("/me is now lurking :3");
    },
    name: "lurk",
    description: "Tells us that you are lurking :3",
};
