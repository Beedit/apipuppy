import { defineEnv, string } from "@ctroenv/core";
import { loadEnv } from "@ctroenv/node";

export const env = defineEnv({
    clientID: string(),
    accessToken: string(),
    obsAddress: string().url(),
    obsPassword: string().default(""),
},
{
    source: loadEnv(),
});
