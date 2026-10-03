import axios from "axios";


const URL = "https://www.speedrun.com/api/v1";
const USER_ID = "j96647rj";
const GAME_ID = "om1mw4d2";

/**
 * Gets PBs from speedrun.com
 * @returns {string} String of categories and PBs
 */
const getPBs = async () => {
    const data = await axios.get(`${URL}/users/${USER_ID}/personal-bests?embed=game,category&game=${GAME_ID}`)

    let times = "";

    data.data.data.forEach((element: any) => {
        let time = element.run.times.primary_t;
        let category = element.category.data.name;

        const date = new Date();
        date.setSeconds(time);
        time = `${date.getHours()}H ${date.getMinutes()}M ${date.getSeconds()}.${date.getMilliseconds()}S`

        times += `${category}: ${time}\n`
    });

    return times
}

export { getPBs }