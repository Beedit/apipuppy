import type { ICommand } from "../interfaces/ICommand.js";
import { getPBs } from "../utils/speedrunHelper.js";

const pb: ICommand = {
    function: async (reply: Function) => {
        reply(`My PBs are\n${getPBs}`)
    },
    name: "pb"
}

export { pb }