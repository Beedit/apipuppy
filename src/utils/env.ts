import { defineEnv, string } from "@ctroenv/core";
import { loadEnv } from "@ctroenv/node";

// Commented out is for implementing more complex auth in the future. Currently unused/

export const env = defineEnv({
    clientID: string(),
    // clientSecret: string(),
    username: string(),
    accessToken: string(),
    // refreshToken: string(),
    obsAddress: string().url(),
    obsPassword: string().default(""),
},
{
    source: loadEnv(),
});
