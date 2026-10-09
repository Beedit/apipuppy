import axios from "axios";
import { getOrdinal } from "./utils.js";

const URL = "https://www.speedrun.com/api/v1";
const USER_ID = "j96647rj";
const GAME_ID = "om1mw4d2";
const currDate = new Date();

interface RunData {
    data: {
        place: number
        run: {
            weblink: string
            times: {
                primary_t: number
            }
            submitted: string
        }
        category: {
            data: {
                name: string
            }
        }
    }[]
}

/**
 * Gets PBs from speedrun.com
 * @returns {string} String of PB
 */
const getPBs = async () => {
    const data = await axios.get<RunData>(`${URL}/users/${USER_ID}/personal-bests?embed=category&game=${GAME_ID}`);
    const runJSON = data.data.data[0];
    if (runJSON) {
        let pbMessage = "";

        const submitDate = new Date(runJSON.run.submitted);

        const time = runJSON.run.times.primary_t;

        const hours = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = (time % 60).toFixed(3);

        const formattedTime = `${hours}h ${mins}m ${secs}s`;

        const msDiff = currDate.getTime() - submitDate.getTime();
        const daysDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));

        pbMessage += `${runJSON.category.data.name}: ${formattedTime} | 🏆 ${runJSON.place}${getOrdinal(runJSON.place)} place | 📆 ${daysDiff} days ago | 🔗 ${runJSON.run.weblink}`;

        return pbMessage;
    }
    return "";
};

export { getPBs };
