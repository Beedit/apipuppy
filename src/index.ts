import { StaticAuthProvider } from "npm:@twurple/auth";
import { Bot, createBotCommand } from "npm:@twurple/easy-bot";
import { woof } from "./commands/woof.ts";
import { env } from "./utils/env.ts";
import { brown } from "./commands/brown.ts";
import { gg } from "./commands/gg.ts";
import { gold } from "./commands/gold.ts";
import { fortune } from "./commands/fortune.ts";

const authProvider = new StaticAuthProvider(env.clientID, env.accessToken);

const bot = new Bot(
    {
        authProvider,
        channel: "averypuppy",
        commands: [
            createBotCommand("woof", (_params, { reply }) => { woof(reply) }, { aliases: ["puppy", "dog"] }),
            createBotCommand("brown", (_params, { reply}) => { brown(reply) }),
            createBotCommand("fortune", (_params, { reply }) => { fortune(reply) }),
            createBotCommand("gg", (_params, { reply }) => { gg(reply) }),
            createBotCommand("gold", (_params, { reply }) => { gold(reply) }),
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

bot.onConnect(() => console.log("woof woof it workin"));