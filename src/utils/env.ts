import { defineEnv, string } from "@ctroenv/core"

export const env = defineEnv({
    clientID: string(),
    accessToken: string()
})