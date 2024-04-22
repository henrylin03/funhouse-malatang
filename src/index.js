import "./styles/normalise.css";
import "./styles/style.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";

const page = (function () {
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const logo = document.querySelector(".logo");

  const generateHomePage = () => {
    menuBtn.classList.remove("selected");
    homeBtn.classList.add("selected");
    createHomePage();
  };

  const generateMenuPage = () => {
    homeBtn.classList.remove("selected");
    menuBtn.classList.add("selected");
    createMenuPage();
  };

  generateHomePage();

  logo.addEventListener("click", generateHomePage);
  homeBtn.addEventListener("click", generateHomePage);
  menuBtn.addEventListener("click", generateMenuPage);
})();
