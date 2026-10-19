import messages from "../data/messages.json" with { type: "json" };
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const distMessagesPath = fileURLToPath(
    new URL("../data/messages.json", import.meta.url),
);

const srcMessagesPath = fileURLToPath(
    new URL("../../../src/data/messages.json", import.meta.url),
);

const data: Record<string, string[]> = messages;

export function getMessages(category: string): string[] {
    return data[category] ?? [];
}

export async function addMessage(category: string, message: string): Promise<boolean> {
    if (!Array.isArray(data[category])) {
        return false;
    }

    if (data[category].includes(message)) {
        return false;
    }

    data[category].push(message);

    await Promise.all([
        writeFile(
            distMessagesPath,
            JSON.stringify(data, null, 4) + "\n",
            "utf8",
        ),
        writeFile(
            srcMessagesPath,
            JSON.stringify(data, null, 4) + "\n",
            "utf8",
        ),
    ]);

    return true;
}