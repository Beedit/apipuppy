import type { ICommand } from "../interfaces/ICommand.js";
import { selectRandom } from "../utils/utils.js"

const ggMessages = [
  "gg :3",
  "gg puppy",
  "gg gamer",
  "gg awoooo",
  "gg wp",
  "ggs :3c",
  "good game good puppy",
  "gg that was gaming",
  "gg we take those",
  "gg close enough",
  "gg i saw that",
  "gg surely next run",
  "gg puppy gaming",
  "gg certified gamer moment",
  "gg the dog approves",
  "gg awoooooo",
  "gg ez",
  "gg ez puppy diff",
  "gg no re",
  "gg go next :3",
  "gg run it back",
  "gg chat",
  "gg that happened",
  "gg absolutely normal portal 2 gameplay",
  "gg nothing to see here",
  "gg i am a dog",
  "gg fuckin easyyy",
  "gg frickin easyyy",
  "THIS RUN CHANGED MY LIFE GG",
  "I WAS HERE OH MY GOD THIS IS HISTORY.. THIS WILL GO DOWN IN THE RECORD BOOKS HOLY SHIT",
  "gg. martin8 could never.",
  "mekelec moment",
  "gg i guess idk",
];

const gg: ICommand = {
  function: (reply: Function) => {
    reply(selectRandom(ggMessages))
  },
  name: "gg",
  description: "Say gg!"
}
export { gg }