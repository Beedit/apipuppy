import { StaticAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";
import { Bot } from "@twurple/easy-bot";
import { env } from "./env.js";
import { commands, createCommands } from "./utils.js";

const auth = () => {
    return new StaticAuthProvider(env.clientID, env.accessToken);
};

const bot = new Bot({
    authProvider: auth(),
    channel: env.channel,
    commands: createCommands(commands()),
});

const apiClient = new ApiClient({ authProvider: auth() });

bot.onSub(({ broadcasterName, userName }) => {
    void bot.say(broadcasterName, `AWOO @${userName}!! subscribed to the channel!`);
});

bot.onResub(({ broadcasterName, userName, months }) => {
    void bot.say(broadcasterName, `AWOO @${userName}!! subscribed to the channel for a total of ${months} months!`);
});

bot.onSubGift(({ broadcasterName, gifterName, userName }) => {
    void bot.say(broadcasterName, `AWOO @${gifterName}!! gifted a subscription to @${userName}!`);
});

bot.onRaid(({ broadcasterName, userName, viewerCount }) => {
    const pupText = (viewerCount <= 1) ? "puppy" : "puppies";
    void bot.say(broadcasterName, `AWOO!!! ${userName} is raiding with ${viewerCount} ${pupText}!!!`);
});

export { auth as authProvider, bot, apiClient };
