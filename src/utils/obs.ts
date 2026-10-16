import OBSWebSocket from "obs-websocket-js";
import { logger } from "./utils.js";
import OBSStatus from "../types/classes/ObsStatus.js";

const obs = new OBSWebSocket();
export const obsStatus = new OBSStatus(false);

obs.on("ConnectionOpened", () => {
    obsStatus.connectedStatus = true;
    logger.info("OBS Connected!");
});

export { obs };
