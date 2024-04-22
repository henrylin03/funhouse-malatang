import "./styles/normalise.css";
import "./styles/style.css";
import { createHomePage } from "./home";
import { createMenuPage } from "./menu";

const page = (function () {
  const homeBtn = document.querySelector("#home-btn");
  const menuBtn = document.querySelector("#menu-btn");
  const logo = document.querySelector(".logo");

  // initialise home page
  createHomePage();

  // add event listeners
  logo.addEventListener("click", createHomePage);
  homeBtn.addEventListener("click", createHomePage);
  menuBtn.addEventListener("click", createMenuPage);
})();
