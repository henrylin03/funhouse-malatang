export function createHomePage() {
  const mainElement = document.querySelector("main");

  const heroSection = createHero();
  const aboutSection = createAbout();

  mainElement.appendChild(heroSection);
  mainElement.appendChild(aboutSection);
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

function createAbout() {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about");

  const heading = document.createElement("h2");
  heading.textContent = "About us";

  const copy = document.createElement("p");
  copy.innerHTML =
    "In 1908, a secret soup recipe in Chongqing kickstarted the beginning of Chinese hotpot as we know it. The recipe combined more than a dozen of ingredients and spices, creating the perfect hotpot broth: slightly numbing, moderately spicy but easy on the stomach.<br/><br/>Fast forward to 2016 when, with the help of a 3rd generation descendant of the recipe holder, Funhouse Malatang was started in Sydney, Australia. Having expanded to three locations, Funhouse continues to share the authentic Chongqing flavours and soul-warming broths to its happy customers.";

  aboutSection.appendChild(heading);
  aboutSection.appendChild(copy);

  return aboutSection;
}
