export function createMenuPage() {
  const mainElement = document.querySelector("main");

  mainElement.appendChild(createAboveTheFoldSection());
  mainElement.appendChild(createIngredientsSection());

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
  subtext.textContent =
    "From rolls of succulent meat to crispy vegetables; from chewy noodles to soft fish-tofu that melt in your mouth. Select your favourites or try something new - either way, we're committed to only providing fresh, high quality ingredients at our stores, guaranteeing a satisfying meal every time!";

  section.appendChild(heading);
  section.appendChild(subtext);

  return section;
}
