import { RefreshingAuthProvider } from "@twurple/auth";
import { ApiClient } from "@twurple/api";
import { Bot } from "@twurple/easy-bot";
import { commands, createCommands, logger } from "./utils.js";
import config from "./config.js";
import { exit } from "process";

const auth = async () => {
    const a = new RefreshingAuthProvider({
        clientId: config.clientID,
        clientSecret: config.clientSecret,
    });

    await a.addUserForToken({
        accessToken: config.accessToken,
        refreshToken: config.refreshToken,
        expiresIn: 0,
        obtainmentTimestamp: 0,
    });

    a.addIntentsToUser(config.userID, ["chat"]);

    return a;
};

const authenticated = await auth();

authenticated.onRefresh((userID, newToken) => {
    if (userID == config.userID) {
        config.accessToken = newToken.accessToken;
        if (newToken.refreshToken) {
            config.refreshToken = newToken.refreshToken;
        }
        config.save();
    } else {
        logger.fatal("The userID returned by twitch is different to the one in the config file. Nothing has been changed and the program will exit");
        exit();
    }
});

const bot = new Bot({
    authProvider: authenticated,
    channel: config.channel,
    commands: createCommands(commands()),
});

const apiClient = new ApiClient({ authProvider: authenticated });

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
