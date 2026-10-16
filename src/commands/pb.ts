import type { Command } from "../types/interfaces/Command.js";
import { getPBs } from "../utils/speedrunHelper.js";

export const pb: Command = {
    function: async (context) => {
        await context.reply(`/me ${await getPBs()}`);
    },
    name: "pb",
    description: "Retrieves avery's PB on the speedrun.com leaderboard!",
};
