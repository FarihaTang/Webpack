import getUsers from "./request";
import "./styles/main.scss";
import laughImg from "./assets/laugh.png";

const laughImgEle = document.getElementById("laughImg");
laughImgEle.src = laughImg;
console.log(getUsers());
