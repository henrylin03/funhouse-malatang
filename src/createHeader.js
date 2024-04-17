import logoPath from "./assets/images/logo.jpg";

export function createHeader() {
  const header = document.querySelector("header");
  const logoDiv = document.querySelector(".logo");

  const logo = new Image();
  logo.src = logoPath;
  logo.setAttribute(
    "alt",
    "Logo for Funhouse Malatang. A red bowl with Chinese characters for Funhouse Malatang's name 'Xiao Huan Xi at the top, and Funhouse in English at the bottom."
  );

  logoDiv.appendChild(logo);

  return header;
}
