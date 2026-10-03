import { selectRandom } from "../utils/utils.ts"
const fortuneMessages = [
  "🔮 awoooo... a PB approaches :3",
  "🔮 puppy sees a time save in your future",
  "🔮 you will save time somewhere completely unexpected",
  "🔮 your next portal will be BEAUTIFUL",
  "🔮 the timer will scare you. ignore it.",
  "🔮 you will lose 10 seconds and somehow gain 15",
  "🔮 the PB is hiding in the walls",
  "🔮 the dog has seen the future. it is fast.",
  "🔮 your movement will be suspiciously clean",
  "🔮 today, the portals align :3",
  "🔮 a gold split is waiting for you",
  "🔮 you will choke immediately after saying 'this is the run'",
  "🔮 the next reset will be completely justified",
  "🔮 you are one good chamber away from greatness",
  "🔮 the run knows you are watching...",
  "🔮 awooooo... green splits incoming",
  "🔮 puppy predicts a HUGE time save",
  "🔮 ruff ruff... the PB is getting closer",
  "🔮 you will suddenly remember how to portal",
  "🔮 fortune says: LOCK IN",
  "🔮 the next chamber is legally required to be free",
  "🔮 puppy sees a suspiciously good split",
  "🔮 awooo... the dog believes in this run",
  "🔮 your destiny contains at least one gold",
  "🔮 ruff ruff... no silly mistakes today",
  "🔮 the timer is lying. trust the puppy",
  "🔮 puppy predicts you're so back",
  "🔮 a massive pace swing approaches",
  "🔮 awooooo... sub-1:19 pace detected",
  "🔮 your next portal will be slightly less goofy",
  "🔮 the dog has consulted the splits...",
  "🔮 fortune says: don't reset yet",
  "🔮 you will gain time by doing something incredibly stupid",
  "🔮 ruff ruff... clean movement incoming",
  "🔮 puppy sees the PB. it's just around the corner",
  "🔮 awooo... the portals are cooperating",
  "🔮 your future contains many zoomies",
  "🔮 the dog predicts emotional damage followed by a PB",
  "🔮 fortune says: trust the strat",
  "🔮 awooooo... HUGE DOG PACE",
];

const fortune = (reply: Function) => {
    reply(selectRandom(fortuneMessages))
}

export { fortune }