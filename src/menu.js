import ingredientsDisplayImg from "./assets/images/ingredients.jpg";
import peopleGettingIngredientsImg from "./assets/images/people-getting-ingredients.jpg";
import spicyImg from "./assets/images/spicy.jpg";
import boneImg from "./assets/images/bone.jpg";
import malaDryImg from "./assets/images/malaDry.jpg";
import tomatoImg from "./assets/images/tomato.jpg";

export function createMenuPage() {
  const mainElement = document.querySelector("main");

  // clear main section
  mainElement.replaceChildren();

  mainElement.appendChild(createAboveTheFoldSection());
  mainElement.appendChild(createIngredientsSection());
  mainElement.appendChild(createBaseSection());

  return;
}

function createAboveTheFoldSection() {
  const aboveTheFoldSection = document.createElement("section");
  aboveTheFoldSection.classList.add("above-the-fold");
  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner");

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Menu";
  const pageSubtext = document.createElement("p");
  pageSubtext.textContent =
    "We ensure to have the highest quality ingredients available at all times for you to pick; all served in authentic, Chongqing-style, hotpot soup or dry malatang of your choice.";
  innerContainer.appendChild(pageHeader);
  innerContainer.appendChild(pageSubtext);
  aboveTheFoldSection.appendChild(innerContainer);

  return aboveTheFoldSection;
}

function createIngredientsSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "ingredients");
  const heading = document.createElement("h2");
  heading.textContent = "Ingredients";
  const subtext = document.createElement("p");
  subtext.classList.add("section-subtext");
  subtext.textContent =
    "From rolls of succulent meat to crispy vegetables; from chewy noodles to soft fish-tofu that melt in your mouth. Select your favourites or try something new - either way, we're committed to only providing fresh, high quality ingredients at our stores, guaranteeing a satisfying meal every time!";

  const images = [ingredientsDisplayImg, peopleGettingIngredientsImg];
  const imgsContainer = document.createElement("div");
  imgsContainer.classList.add("img-container");
  images.forEach((img) => {
    const tempImageSubcontainer = document.createElement("figure");
    const tempImageElement = new Image();
    tempImageElement.src = img;
    tempImageElement.setAttribute(
      "alt",
      "Beautiful, fresh ingredients laid out on display for customers to pick and choose to include in their malatang at Funhouse!"
    );
    tempImageSubcontainer.appendChild(tempImageElement);
    imgsContainer.appendChild(tempImageSubcontainer);
  });

  section.appendChild(heading);
  section.appendChild(subtext);
  section.appendChild(imgsContainer);

  return section;
}

function createBaseSection() {
  const bases = [
    { name: "Spicy Mala Soup", img: spicyImg, spiceLevel: 3 },
    { name: "Pork Bone Broth", img: boneImg, spiceLevel: 0 },
    { name: "Spicy Dry Mala", img: malaDryImg, spiceLevel: 3 },
    { name: "Tomato Soup", img: tomatoImg, spiceLevel: 0 },
  ];

  const section = document.createElement("section");
  section.setAttribute("id", "bases");
  const heading = document.createElement("h2");
  heading.textContent = "Bases";
  const subtext = document.createElement("p");
  subtext.textContent =
    "Pick between spicy and non-spicy broths, or no broth at all with our range of dry, stirfried malatang!";
  subtext.classList.add("section-subtext");

  const grid = document.createElement("article");
  grid.classList.add("grid");
  bases.forEach((b) => {
    const tempDiv = document.createElement("div");
    tempDiv.classList.add("base");
    const tempHeading = document.createElement("h3");
    tempHeading.textContent = b.name;
    const tempImgWrapper = document.createElement("div");
    tempImgWrapper.classList.add("base-img");
    const tempBaseImg = new Image();
    tempBaseImg.src = b.img;

    tempDiv.appendChild(tempHeading);
    tempImgWrapper.appendChild(tempBaseImg);
    tempDiv.appendChild(tempImgWrapper);
    grid.appendChild(tempDiv);
  });

  section.appendChild(heading);
  section.appendChild(subtext);
  section.appendChild(grid);

  return section;
}
