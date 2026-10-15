import { env } from "./utils/env.js";
import { bot } from "./utils/bot.js";
import { obs } from "./utils/obs.js";

await obs.connect(env.obsAddress, env.obsPassword, {}).then(async () => {
    console.log("OBS Connected!");
    await bot.join(env.username);
});

bot.onConnect(() => {
    console.log("woof woof it workin");
});
