import spicyImg from "../images/bases/spicy.jpg";
import boneImg from "../images/bases/bone.jpg";
import pickedVegetableImg from "../images/bases/pickedVeg.jpg";
import malaDryImg from "../images/bases/malaDry.jpg";
import tomatoImg from "../images/bases/tomato.jpg";
import classicalImg from "../images/bases/classical.jpg";

const bases = [
  {
    name: "Signature Mala",
    img: spicyImg,
    spiceLevel: 3,
  },
  { name: "Bone Broth", img: boneImg, spiceLevel: 0 },
  { name: "Dry Mala", img: malaDryImg, spiceLevel: 3 },
  { name: "Classical Soup", img: classicalImg, spiceLevel: 0 },
  { name: "Tomato Soup", img: tomatoImg, spiceLevel: 0 },
  { name: "Pickled Vegetable Soup", img: pickedVegetableImg, spiceLevel: 0 },
];

export default bases;
