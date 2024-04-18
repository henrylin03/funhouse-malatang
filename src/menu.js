export function createMenuPage() {
  const mainElement = document.querySelector("main");

  const aboveTheFoldSection = document.createElement("section");
  aboveTheFoldSection.classList.add("above-the-fold");
  const innerContainer = document.createElement("div");
  innerContainer.classList.add("inner");

  const pageHeader = document.createElement("h1");
  pageHeader.textContent = "Menu";
  const pageSubtext = document.createElement("p");
  pageSubtext.textContent =
    "We ensure we have the highest quality ingredients available at all times for you to pick, all served in authentic, Chongqing-style, hotpot soup or dry malatang of your choice";
  innerContainer.appendChild(pageHeader);
  innerContainer.appendChild(pageSubtext);
  aboveTheFoldSection.appendChild(innerContainer);

  mainElement.appendChild(aboveTheFoldSection);

  return;
}
