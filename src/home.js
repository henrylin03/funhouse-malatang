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

  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex");

  const textContainer = document.createElement("text");
  textContainer.classList.add("text");
  const bigText = document.createElement("h1");
  bigText.textContent =
    "Choose from the freshest ingredients, served in a soul-warming broth";
  const smallText = document.createElement("p");
  smallText.textContent =
    "Pick from a wide range of meat, vegetables, seafood and other delicious ingredients, then we'll cook it for you in your choice of soup (or no soup) bases";

  textContainer.appendChild(bigText);
  textContainer.appendChild(smallText);

  const btn = document.createElement("button");
  btn.classList.add("cta");
  btn.textContent = "Visit us";

  const imagesContainer = document.createElement("figure");
  const imgOne = new Image();
  imgOne.src = tongsAndIngredientsImg;
  const imgTwo = new Image();
  imgTwo.src = hotpotImg;

  imagesContainer.appendChild(imgOne);
  imagesContainer.appendChild(imgTwo);

  flexContainer.appendChild(textContainer);
  flexContainer.appendChild(btn);
  flexContainer.appendChild(imagesContainer);

  heroSection.appendChild(createHeader());
  heroSection.appendChild(flexContainer);

  return heroSection;
}
