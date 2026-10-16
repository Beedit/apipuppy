import type { ICommand } from "../interfaces/ICommand.js";

const code: ICommand = {
    function: async (context) => {
        return context.reply("Curious how the bot works? The source code for the bot can be found at https://github.com/Beedit/apipuppy <3");
    },
    name: "code",
    description: "Links to the source code of the bot!",
};

export { code };
