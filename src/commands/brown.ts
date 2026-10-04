import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js"

const brownMessages = [
  "averypuPpypgun blame wood",
  "averypuPpypgun bro just SHITTED on the splits",
  "averypuPpypgun jailbreak? more like shitbreak... am i right chat?",
  "averypuPpypgun bruh",
  "averypuPpypgun washed washed washed",
  "averypuPpypgun 5000 hours btw",
  "averypuPpypgun its SO OVER",
  "averypuPpypgun uninstall vro ur done",
  "averypuPpypgun throwing",
  "averypuPpypgun learn how to bhop buddy",
  "averypuPpypgun wth was that strafe",
  "averypuPpypgun poop split :c",
  "averypuPpypgun pour one out for my fallen pace",
  "averypuPpypgun top 500 runner btw",
  "averypuPpypgun brooooooooooooo shush nobody needs to know",
  "averypuPpypgun just reset puppy",
  "averypuPpypgun sg hdagjajhgdjkagdfghjsakfdghjsgafhjgasfhjgha",
  "averypuPpypgun vro is ASS",
  "averypuPpypgun shit split shit split",
  "averypuPpypgun GOLD GOLD GO- oh... fuck",
  "averypuPpypgun how tf did u brown that",
  "averypuPpypgun tube ride moment",
];

const brown: ICommand = {
  function: (reply: Function) => {
    reply(selectRandom(brownMessages))
  },
  name: "brown",
  description: "Celebrate a brown split with us!"
}

export { brown }