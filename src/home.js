export function createHomePage() {
  const mainElement = document.querySelector("main");
  const heroSection = createHero();

  mainElement.appendChild(heroSection);
}

function createHero() {
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  const heroInnerContainer = document.createElement("div");
  heroInnerContainer.classList.add("inner");

  const heroText = document.createElement("h1");
  heroText.textContent = "Bringing authentic Malatang from Chongqing to Sydney";

  const ctaBtn = document.createElement("button");
  ctaBtn.setAttribute("type", "button");
  ctaBtn.classList.add("cta");
  ctaBtn.textContent = "Visit us";

  heroInnerContainer.appendChild(heroText);
  heroInnerContainer.appendChild(ctaBtn);
  heroSection.appendChild(heroInnerContainer);

  return heroSection;
}
