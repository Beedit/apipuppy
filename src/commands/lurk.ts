import type { ICommand } from "../interfaces/ICommand.js";

const lurk: ICommand = {
    function: (reply: (text: string) => void) => {
        reply("/me is now lurking :3");
    },
    name: "lurk",
    description: "Tells us that you are lurking :3",
};

export { lurk };
