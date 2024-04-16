import { createHeader } from "./header";

export function createHomePage() {
  const mainElement = document.querySelector("main");

  const hero = createHero();
  mainElement.appendChild(hero);
}

function createHero() {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const grid = document.createElement("div");
  grid.classList.add("grid");

  heroSection.appendChild(createHeader());
  heroSection.appendChild(grid);

  return heroSection;
}
