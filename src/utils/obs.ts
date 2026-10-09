import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();
obs.on("ConnectionOpened", () => {
    console.log("obs connection open");
});

export { obs };
