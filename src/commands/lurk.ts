import type { ICommand } from "../interfaces/ICommand.js";

const lurk: ICommand = {
    function: (reply: Function) => {
        reply(`/me is now lurking :3`)
    },
    name: "lurk"
}

export { lurk }