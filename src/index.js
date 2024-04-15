import _ from "lodash";
import "./style.css";
import hotpotImagePath from "./assets/hotpot.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const malatangImg = new Image();
  malatangImg.src = hotpotImagePath;

  element.appendChild(malatangImg);

  return element;
}

console.log("hello");
document.body.appendChild(component());
