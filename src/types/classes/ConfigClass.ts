import type Config from "../interfaces/ConfigInterface.js";

import { logger } from "../../utils/utils.js";
import { writeFile } from "node:fs";
import path from "node:path";

export default class ConfigClass implements Config {
    constructor(config: Config, filePath: string) {
        this.clientID = config.clientID;
        this.clientSecret = config.clientSecret;
        this.accessToken = config.accessToken;
        this.refreshToken = config.refreshToken;
        this.channel = config.channel;
        this.obsAddress = config.obsAddress;
        this.obsPassword = config.obsPassword;
        this.configFilePath = String(path.join(import.meta.dirname, filePath));
        this.userID = config.userID;
    }

    private _configFilePath!: string;
    public get configFilePath(): string {
        return this._configFilePath;
    }

    public set configFilePath(value: string) {
        this._configFilePath = value;
    }

    private _userID!: string;
    public get userID(): string {
        return this._userID;
    }

    public set userID(value: string) {
        this._userID = value;
    }

    private _clientID!: string;
    public get clientID(): string {
        return this._clientID;
    }

    public set clientID(value: string) {
        this._clientID = value;
    }

    private _clientSecret!: string;
    public get clientSecret(): string {
        return this._clientSecret;
    }

    public set clientSecret(value: string) {
        this._clientSecret = value;
    }

    private _accessToken!: string;
    public get accessToken(): string {
        return this._accessToken;
    }

    public set accessToken(value: string) {
        this._accessToken = value;
    }

    private _refreshToken!: string;
    public get refreshToken(): string {
        return this._refreshToken;
    }

    public set refreshToken(value: string) {
        this._refreshToken = value;
    }

    private _channel!: string;
    public get channel(): string {
        return this._channel;
    }

    public set channel(value: string) {
        this._channel = value;
    }

    private _obsAddress!: string;
    public get obsAddress(): string {
        return this._obsAddress;
    }

    public set obsAddress(value: string) {
        this._obsAddress = value;
    }

    private _obsPassword!: string;
    public get obsPassword(): string {
        return this._obsPassword;
    }

    public set obsPassword(value: string) {
        this._obsPassword = value;
    }

    save() {
        logger.info("Saving config");
        writeFile(this.configFilePath, JSON.stringify({
            clientID: this.clientID,
            clientSecret: this.clientSecret,
            accessToken: this.accessToken,
            refreshToken: this.refreshToken,
            channel: this.channel,
            obsAddress: this.obsAddress,
            obsPassword: this.obsPassword,
        }), (err) => {
            if (err) {
                logger.error(err);
                throw err;
            }
        });
        logger.info("Saving config complete");
    }
}
