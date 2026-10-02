import { StaticAuthProvider } from "@twurple/auth";
import { Bot, createBotCommand } from "@twurple/easy-bot";
import { woof } from "./commands/woof.js";
import { env } from "./utils/env.js";

const authProvider = new StaticAuthProvider(env.clientID, env.accessToken);

const bot = new Bot(
    {
        authProvider,
        channel: "averypuppy",
        commands: [
            createBotCommand('woof', (_params, { replyToParent }) => {
                woof(replyToParent)
            })
        ]
    }
)

bot.onSub(({ broadcasterName, userName }) => {
	bot.say(broadcasterName, `AWOO to @${userName} for subscribing to the channel!`);
});
bot.onResub(({ broadcasterName, userName, months }) => {
	bot.say(broadcasterName, `AWOO to @${userName} for subscribing to the channel for a total of ${months} months!`);
});
bot.onSubGift(({ broadcasterName, gifterName, userName }) => {
	bot.say(broadcasterName, `AWOO to @${gifterName} for gifting a subscription to @${userName}!`);
});
