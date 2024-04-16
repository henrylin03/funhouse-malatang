import { createHeader } from "./header";
import bowlImg from "./assets/images/ingredients-in-bowl.jpg";
import tongsAndIngredientsImg from "./assets/images/tongs-and-ingredients.jpg";
import hotpotImg from "./assets/images/hotpot.jpg";

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

  const textContainer = document.createElement("div");
  textContainer.classList.add("text");
  const bigText = document.createElement("h1");
  bigText.textContent =
    "Choose from the freshest ingredients, served in a soul-warming broth";
  const smallText = document.createElement("p");
  smallText.textContent =
    "Pick from a wide range of meat, vegetables, seafood and other delicious ingredients, then we'll cook it for you in your choice of soup (or no soup) bases";

  textContainer.appendChild(bigText);
  textContainer.appendChild(smallText);

  const ctaDiv = document.createElement("div");
  ctaDiv.classList.add("cta-container");
  const btn = document.createElement("button");
  btn.classList.add("cta");
  btn.textContent = "Visit us";
  ctaDiv.appendChild(btn);

  const imagesContainer = document.createElement("figure");
  const imgTongs = new Image();
  imgTongs.src = tongsAndIngredientsImg;
  const imgHotpot = new Image();
  imgHotpot.src = hotpotImg;
  const imgIngredients = new Image();
  imgIngredients.src = bowlImg;

  imagesContainer.appendChild(imgTongs);
  imagesContainer.appendChild(imgIngredients);
  imagesContainer.appendChild(imgHotpot);

  flexContainer.appendChild(textContainer);
  flexContainer.appendChild(ctaDiv);
  flexContainer.appendChild(imagesContainer);

  heroSection.appendChild(createHeader());
  heroSection.appendChild(flexContainer);

  return heroSection;
}
