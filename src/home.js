import { createHeader } from "./header";
import ingredientsImg from "./assets/images/ingredients.jpg";
import meatImg from "./assets/images/meat.jpg";
import splitBowlImg from "./assets/images/split-soup-bowl.jpg";
import tongsAndIngredientsImg from "./assets/images/tongs-and-ingredients.jpg";
import hotpotImg from "./assets/images/hotpot.jpg";
import takeAwayImg from "./assets/images/takeaway.jpg";

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

  const bigText = document.createElement("h1");
  bigText.textContent =
    "Choose from the freshest ingredients, served in a soul-warming broth";
  const smallText = document.createElement("p");
  smallText.textContent =
    "Pick from a wide range of meat, vegetables, seafood and other delicious ingredients, then we'll cook it for you in your choice of soup (or no soup) bases";
  const btn = document.createElement("button");
  btn.classList.add("cta");
  btn.textContent = "Visit us";

  grid.appendChild(bigText);
  grid.appendChild(smallText);
  grid.appendChild(btn);

  const images = [
    ingredientsImg,
    tongsAndIngredientsImg,
    meatImg,
    hotpotImg,
    splitBowlImg,
    takeAwayImg,
  ];
  images.forEach((path) => {
    const imgElement = new Image();
    imgElement.src = path;
    imgElement.setAttribute(
      "alt",
      "delicious food available at Funhouse Malatang"
    );
    grid.appendChild(imgElement);
  });

  heroSection.appendChild(createHeader());
  heroSection.appendChild(grid);

  return heroSection;
}
