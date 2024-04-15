export function createHomePage() {
  const mainElement = document.querySelector("main");

  // hero
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
  mainElement.appendChild(heroSection);

  // const element = document.createElement("div");
  // // Lodash, now imported by this script
  // element.textContent = "this is a test";
  // element.classList.add("hello");
  // const malatangImg = new Image();
  // malatangImg.src = hotpotImagePath;
  // element.appendChild(malatangImg);
  // console.log("hello");
  // document.body.appendChild(element);
}
