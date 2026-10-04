import type { ICommand } from "../interfaces/ICommand.js";
import { getPBs } from "../utils/speedrunHelper.js";

const pb: ICommand = {
    function: async (reply: Function) => {
        reply(`${await getPBs()}`)
    },
    name: "pb"
}

export { pb }