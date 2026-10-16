import type { Command } from "../types/interfaces/Command.js";
import { apiClient } from "../utils/bot.js";

export const followage: Command = {
    function: async (context) => {
        try {
            const { data } = await apiClient.channels.getChannelFollowers(
                context.broadcasterId,
                context.userId,
            );

            const follow = data[0];

            if (!follow) {
                await context.reply(
                    `${context.userDisplayName} isn't following ${context.broadcasterName}.`,
                );
                return;
            }

            const daysFollowing = Math.floor(
                (Date.now() - follow.followDate.getTime()) / 86400000,
            );

            const years = Math.floor(daysFollowing / 365);
            const months = Math.floor((daysFollowing % 365) / 30);
            const days = daysFollowing - years * 365 - months * 30;

            const duration = [
                years ? `${years} year${years === 1 ? "" : "s"}` : "",
                months ? `${months} month${months === 1 ? "" : "s"}` : "",
                days ? `${days} day${days === 1 ? "" : "s"}` : "",
            ].filter(Boolean).join(", ") || "less than a day";

            await context.reply(
                `${context.userDisplayName} has been following ${context.broadcasterName} for ${duration}!`,
            );
        } catch (error) {
            console.error("Failed to get followage:", error);
            await context.reply(
                "bot dead LOL!",
            );
        }
    },
    name: "followage",
    description: "Tells you your follow age!!",
};
