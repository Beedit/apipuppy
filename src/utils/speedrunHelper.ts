import axios from "axios";


const URL = "https://www.speedrun.com/api/v1";
const USER_ID = "j96647rj";
const GAME_ID = "om1mw4d2";

/**
 * Gets PBs from speedrun.com
 * @returns {string} String of categories and PBs
 */
const getPBs = async () => {
    const currDate = new Date();
    const data = await axios.get(`${URL}/users/${USER_ID}/personal-bests?embed=game,category&game=${GAME_ID}`)

    let pbMessage = "";

    // data.data.data.forEach((element: any) => {
    //     let time = element.run.times.primary_t;
    //     let category = element.category.data.name;

    //     const date = new Date();
    //     date.setSeconds(time);
    //     time = `${date.getHours()}H ${date.getMinutes()}M ${date.getSeconds()}.${date.getMilliseconds()}S`

    //     pbMessage += `${category}: ${time}\n`
    // });

    const element = data.data.data.reduce((min: { run: { times: { primary_t: number; }; }; },curr: { run: { times: { primary_t: number; }; }; }) => 
        curr.run.times.primary_t < min.run.times.primary_t ? curr : min
    );

    let submitDate = new Date(element.run.submitted);

    let time = element.run.times.primary_t;
    let category = element.category.data.name;
    let place = element.place;
    let link = element.run.weblink;

    let hours = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = (time % 60).toFixed(3);

    let formattedTime = `${hours}h ${mins}m ${secs}s`;

    let msDiff = currDate.getTime() - submitDate.getTime();
    let daysDiff = Math.floor(msDiff / (1000*60*60*24));

    //make place say 5*th* or 2*nd* at some point
    pbMessage += `/me ${category}: ${formattedTime} | 🏆 ${place}th place | 📆 ${daysDiff} days ago | 🔗 ${link}`

    return pbMessage
}

export { getPBs }