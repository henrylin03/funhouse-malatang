import hotpotImagePath from "./assets/hotpot.jpg";

export function createHomePage() {
  const mainHTML = document.querySelector("main");
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  mainHTML.appendChild(heroSection);

  // const element = document.createElement("div");
  // // Lodash, now imported by this script
  // element.textContent = "this is a test";
  // element.classList.add("hello");
  // const malatangImg = new Image();
  // malatangImg.src = hotpotImagePath;
  // element.appendChild(malatangImg);
  // console.log("hello");
  // document.body.appendChild(element);
}
