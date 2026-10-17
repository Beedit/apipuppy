import initialConfig from "../../config.json" with { type: "json" };
import ConfigClass from "../types/classes/ConfigClass.js";
const configFilePath = "config.json";

export default new ConfigClass(initialConfig, configFilePath);
