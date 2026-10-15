import { env } from "./utils/env.js";
import { bot } from "./utils/bot.js";
import { obs } from "./utils/obs.js";

await obs.connect(env.obsAddress, env.obsPassword, {}).then(() => {
    console.log("OBS Connected!");
    bot.onConnect(() => {
        console.log("woof woof it workin");
    });
});
