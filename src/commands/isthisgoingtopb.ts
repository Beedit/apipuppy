import { selectRandom } from "../utils/utils.js";

const pbHighMessages = [
  "averypuPpypgun THE DOG HAS SPOKEN. THIS IS THE RUN.",
  "averypuPpypgun PB IS SO FREE.",
  "averypuPpypgun THE RUN IS BLESSED.",
  "averypuPpypgun absolutely PB-shaped :3",
  "averypuPpypgun the dog is feeling EXTREMELY confident",
  "averypuPpypgun awoooooo THIS IS PB PACE",
  "averypuPpypgun puppy sees the leaderboard already",
  "averypuPpypgun ruff ruff... WE ARE GAMING",
  "averypuPpypgun THE PB IS INCOMING",
  "averypuPpypgun puppy has detected a MASSIVE run",
  "averypuPpypgun awoooo... the dog believes HARD",
  "averypuPpypgun this run smells suspiciously fast",
  "averypuPpypgun PB PB PB PB PB",
  "averypuPpypgun the portals have aligned :3c",
  "averypuPpypgun puppy says DO NOT CHOKE",
  "averypuPpypgun HUGE DOG GAMING DETECTED",
  "averypuPpypgun the run is absolutely cooking",
  "averypuPpypgun awooooo... SUB-1:19 ENERGY",
  "averypuPpypgun the dog has blessed this attempt",
  "averypuPpypgun ruff ruff... SEND IT",
];

const pbMediumMessages = [
  "averypuPpypgun very PB-shaped :3",
  "averypuPpypgun looking good...",
  "averypuPpypgun the dog believes",
  "averypuPpypgun don't choke",
  "averypuPpypgun this could absolutely happen",
  "averypuPpypgun awoooo... we're cooking",
  "averypuPpypgun ruff ruff... good pace",
  "averypuPpypgun puppy is cautiously optimistic",
  "averypuPpypgun this run has potential :3c",
  "averypuPpypgun awooo... keep it together",
  "averypuPpypgun the dog sees some time save",
  "averypuPpypgun pretty gaming ngl, so id say maybe possible probably not",
  "averypuPpypgun puppy says KEEP GOING",
  "averypuPpypgun ruff ruff... we're still alive",
  "averypuPpypgun this run is looking kinda clean",
  "averypuPpypgun awooooo... maybe maybe maybe",
  "averypuPpypgun puppy detects PB potential",
  "averypuPpypgun don't do anything silly now... its coming.",
  "averypuPpypgun ruff ruff... maintain the zoomies",
  "averypuPpypgun the dog has faith... mostly",
];

const pbLowMessages = [
  "averypuPpypgun uh oh...",
  "averypuPpypgun the dog has concerns",
  "averypuPpypgun perhaps we reset",
  "averypuPpypgun this run may require emotional support",
  "averypuPpypgun the PB is currently hiding",
  "averypuPpypgun awoooo... questionable pace",
  "averypuPpypgun ruff ruff... something went wrong",
  "averypuPpypgun puppy is looking away...",
  "averypuPpypgun erm... slightly washed",
  "averypuPpypgun the dog has detected silly movement",
  "averypuPpypgun awooooo... brown split jumpscare",
  "averypuPpypgun this run is fighting for its life",
  "averypuPpypgun ruff ruff... tactical time loss",
  "averypuPpypgun puppy says maybe don't look at the timer",
  "averypuPpypgun the PB has escaped",
  "averypuPpypgun awooo... we're a little cooked",
  "averypuPpypgun the dog is concerned but supportive",
  "averypuPpypgun erm... recoverable. probably.",
  "averypuPpypgun ruff ruff... SAVE THE RUN",
  "averypuPpypgun puppy believes in miracles :3",
  "averypuPpypgun STREAMER WASHED. GIVE UP. PUPPY DEAD",
  "averypuPpypgun local puppy found dead in ditch. just reset lil vro",
  "averypuPpypgun uninstalling would be more likely",
  "averypuPpypgun haha a pb? not happening buddy",
  "averypuPpypgun I HATE THIS STUPID GAME.",
  "averypuPpypgun bro dont even ask me",
];

const isthisgoingtopb = (reply: Function) => {
    const chance = Math.floor(Math.random() * 101);
    let verdict: string;

    if (chance >= 90) {
        verdict = String(selectRandom(pbHighMessages))
    } else if (chance >= 50) {
        verdict = String(selectRandom(pbMediumMessages))
    } else {
        verdict = String(selectRandom(pbLowMessages))
    }

    reply(`${verdict} PB probability: ${chance}%`)
}

export { isthisgoingtopb }