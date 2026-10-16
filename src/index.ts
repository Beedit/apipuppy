import { env } from "./utils/env.js";
import { bot } from "./utils/bot.js";
import { obs, obsStatus } from "./utils/obs.js";
import { logger } from "./utils/utils.js";

await obs.connect(env.obsAddress, env.obsPassword, {}).then(() => {
    logger.info("OBS Connected!");
    bot.onConnect(() => {
        logger.info("woof woof it workin");
    });
}).catch(() => {
    logger.error("OBS connection failed");
    logger.warn("OBS Commands are disabled");
    obsStatus.connectedStatus = false;

    bot.onConnect(() => {
        logger.info("woof woof it workin");
    });
});
