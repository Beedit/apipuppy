import type { ICommand } from "../interfaces/ICommand.js";

const lurk: ICommand = {
    function: async (context) => {
        await context.reply("/me is now lurking :3");
    },
    name: "lurk",
    description: "Tells us that you are lurking :3",
};

export { lurk };
