import { createHeader } from "./header";
import { createFooter } from "./footer";
import bowlImg from "./assets/images/ingredients-in-bowl.jpg";
import tongsAndIngredientsImg from "./assets/images/tongs-and-ingredients.jpg";
import hotpotImg from "./assets/images/hotpot.jpg";
import tongsImg from "./assets/images/tongs.png";
import bowlSpoonSvg from "./assets/images/bowl-spoon.svg";
import soupSvg from "./assets/images/soup.svg";
import sauceSvg from "./assets/images/sauce.svg";
import locations from "./assets/data/locations.json";
import chatswoodStoreImg from "./assets/images/storeChatswood.jpg";
import hurstvilleStoreImg from "./assets/images/storeHurstville.jpg";
import pinIconSvg from "./assets/images/map-pin.svg";
import phoneIconSvg from "./assets/images/phone.svg";

export function createHomePage() {
  const body = document.body;
  const mainElement = document.querySelector("main");

  const heroSection = createHeroSection();
  const stepsSection = createStepsSection();
  const locationsSection = createLocationsSection();

  mainElement.appendChild(heroSection);
  mainElement.appendChild(stepsSection);
  mainElement.appendChild(locationsSection);
  body.appendChild(createFooter());
}

function createHeroSection() {
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
  imgTongs.setAttribute("width", "25%");
  const imgHotpot = new Image();
  imgHotpot.src = hotpotImg;
  imgHotpot.setAttribute("width", "200px");
  imgHotpot.classList.add("centre");
  const imgIngredients = new Image();
  imgIngredients.src = bowlImg;
  imgIngredients.setAttribute("width", "25%");

  imagesContainer.appendChild(imgTongs);
  imagesContainer.appendChild(imgHotpot);
  imagesContainer.appendChild(imgIngredients);

  flexContainer.appendChild(textContainer);
  flexContainer.appendChild(ctaDiv);
  flexContainer.appendChild(imagesContainer);

  heroSection.appendChild(createHeader());
  heroSection.appendChild(flexContainer);

  return heroSection;
}

function createStepsSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "steps");

  const heading = document.createElement("h2");
  heading.textContent = "How it works";

  const grid = document.createElement("div");
  grid.classList.add("grid");

  const STEPS = [
    { description: "Choose your ingredients", imgSrc: tongsImg },
    {
      description: "Pick your soup base or go for dry malatang (no soup)",
      imgSrc: bowlSpoonSvg,
    },
    {
      description: "We'll cook it for you and buzz you when it's ready",
      imgSrc: soupSvg,
    },
    {
      description:
        "Add toppings at the self-serve station like peanut sauce or more spice (if you dare!)",
      imgSrc: sauceSvg,
    },
  ];

  STEPS.forEach((step, idx) => {
    const tempStepDiv = document.createElement("div");
    tempStepDiv.classList.add("step");

    const tempTextDiv = document.createElement("div");
    tempTextDiv.classList.add("text");

    const stepNumber = document.createElement("h3");
    stepNumber.textContent = idx + 1;
    tempTextDiv.appendChild(stepNumber);

    const stepDescription = document.createElement("p");
    stepDescription.textContent = step.description;
    tempTextDiv.appendChild(stepDescription);

    const stepImg = new Image();
    stepImg.src = step.imgSrc;

    tempStepDiv.appendChild(tempTextDiv);
    tempStepDiv.appendChild(stepImg);
    grid.appendChild(tempStepDiv);
  });

  section.appendChild(heading);
  section.appendChild(grid);

  return section;
}

function createLocationsSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "locations");

  const heading = document.createElement("h2");
  heading.textContent = "Locations";

  const grid = document.createElement("div");
  grid.classList.add("grid");

  const locationsImagesLookup = {
    Chatswood: chatswoodStoreImg,
    Hurstville: hurstvilleStoreImg,
  };

  locations.forEach((l) => {
    const card = document.createElement("article");
    card.classList.add("card");

    const locationName = document.createElement("h3");
    locationName.textContent = `${l.suburb} Funhouse`;

    const locationImg = new Image();
    locationImg.src = locationsImagesLookup[l.suburb];
    locationImg.classList.add("location-photo");

    const addressRow = document.createElement("div");
    addressRow.classList.add("row");
    const pinIcon = new Image();
    pinIcon.classList.add("icon");
    pinIcon.src = pinIconSvg;
    const address = document.createElement("p");
    const addressDataArray = l.address;
    address.innerHTML = addressDataArray.join("<br>");
    addressRow.appendChild(pinIcon);
    addressRow.appendChild(address);

    const phoneRow = document.createElement("div");
    phoneRow.classList.add("row");
    const phoneIcon = new Image();
    phoneIcon.classList.add("icon");
    phoneIcon.src = phoneIconSvg;
    const phone = document.createElement("p");
    phone.textContent = l.phone;
    phoneRow.appendChild(phoneIcon);
    phoneRow.appendChild(phone);

    card.appendChild(locationName);
    card.appendChild(locationImg);
    card.appendChild(addressRow);
    card.appendChild(phoneRow);
    grid.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(grid);

  return section;
}
