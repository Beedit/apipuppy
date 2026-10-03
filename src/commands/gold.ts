import { selectRandom } from "../utils/utils.js"

const goldMessages = [
  "averypuPpypgun GOLD GOLD GOLD",
  "averypuPpypgun glod btw",
  "averypuPpypgun Goldge",
  "averypuPpypgun CHEERS TO THAT",
  "averypuPpypgun a gold wont save u buddy",
  "averypuPpypgun NO RESET. GOLD GOLD. YTES YEYDI UWsufiasu ifhahfu",
  "averypuPpypgun AWOOOOOOOOOOOOOOOOOOOO GOOD PUPPY",
  "averypuPpypgun bottoms up",
  "averypuPpypgun tequilaaaaa",
  "averypuPpypgun wr pace with that glod",
  "averypuPpypgun streamer UNWASHED!!",
  "averypuPpypgun wooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooof",
  "averypuPpypgun *wags tail* or something idk",
  "averypuPpypgun guys--- im nervous--- its a glod...",
  "averypuPpypgun meow",
  "averypuPpypgun puppy says PB TIME!",
  "averypuPpypgun awoooo PB PB PB",
  "averypuPpypgun awooo FREE PB PACE",
  "averypuPpypgun awooooo HUGE TIME SAVE",
  "averypuPpypgun awooo ur cooking :3c",
  "averypuPpypgun puppy detects a gold split :3",
];

const gold = (reply: Function) => {
    reply(selectRandom(goldMessages))
}

export { gold }