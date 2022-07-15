import { capitalizeName } from "./utils/capitalizeName.js";
import { changeDP } from "./utils/changeDP.js";
import { getDecadev } from "./utils/data.js";
import { greeter } from "./utils/greeter.js";
import { extractToken } from "./utils/tokenExtractor.js";

//elements
const greeting = document.querySelector("#greeting");
const lastName = document.querySelector("#last-name");
const stackName = document.querySelector("#stack-name");
const squadNumber = document.querySelector("#squad-number");
const profilePicture = document.querySelector("#profile-picture");

window.addEventListener("DOMContentLoaded", onLoad);

//function to run on content load
async function onLoad() {
  greeting.textContent = greeter();
  const decadev = await getDecadev(extractToken("url", document.URL));
  lastName.textContent = capitalizeName(decadev.lastName);
  stackName.textContent = decadev.stack;
  squadNumber.textContent = decadev.squadNo;
  profilePicture.style.backgroundImage = decadev.image;
}

//listener for profile picture
profilePicture.addEventListener("click", changeDP);
