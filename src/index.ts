import { StaticAuthProvider } from "@twurple/auth";
import { Bot, createBotCommand } from "@twurple/easy-bot";
import { woof } from "./commands/woof.js";
import { env } from "./utils/env.js";
import { brown } from "./commands/brown.js";
import { gg } from "./commands/gg.js";
import { gold } from "./commands/gold.js";
import { fortune } from "./commands/fortune.js";

const authProvider = new StaticAuthProvider(env.clientID, env.accessToken);

const bot = new Bot(
    {
        authProvider,
        channel: "averypuppy",
        commands: [
            createBotCommand("woof", (_params, { replyToParent }) => { woof(replyToParent) }, { aliases: ["puppy", "dog"] }),
            createBotCommand("brown", (_params, {replyToParent}) => { brown(replyToParent) }),
            createBotCommand("fortune", (_params, {replyToParent}) => { fortune(replyToParent) }),
            createBotCommand("gg", (_params, {replyToParent}) => { gg(replyToParent) }),
            createBotCommand("gold", (_params, {replyToParent}) => { gold(replyToParent) }),
        ]
    }
)

bot.onSub(({ broadcasterName, userName }) => {
	bot.say(broadcasterName, `AWOO @${userName}!! subscribed to the channel!`);
});
bot.onResub(({ broadcasterName, userName, months }) => {
	bot.say(broadcasterName, `AWOO @${userName}!! subscribed to the channel for a total of ${months} months!`);
});
bot.onSubGift(({ broadcasterName, gifterName, userName }) => {
	bot.say(broadcasterName, `AWOO @${gifterName}!! gifted a subscription to @${userName}!`);
});
