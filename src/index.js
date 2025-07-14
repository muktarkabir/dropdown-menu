import "./global-styles.css";
import { dropDownMenu } from "./modules/dropdown-menu.js";

// const dropDownButton = document.querySelector(".dots");
// const dropDownMenu = document.querySelector(".menu");

// dropDownButton.addEventListener("click", function () {
//   if (dropDownMenu.style.display === "none") {
//     dropDownMenu.setAttribute("style", "display: block");
//     dropDownMenu.dataset.open = true;
//   } else {
//     dropDownMenu.setAttribute("style", "display: none");
//     dropDownMenu.dataset.open = false;
//   }
// });
// window.addEventListener("click", function (e) {
//   if (
//     !dropDownMenu.contains(e.target) &&
//     !dropDownButton.contains(e.target) &&
//     dropDownMenu.dataset.open === "true"
//   ) {
//     dropDownMenu.setAttribute("style", "display: none");
//     dropDownMenu.dataset.open = false;
//   } else {
//     return;
//   }
// });

const my = dropDownMenu("edit", "delete", "move", "copy");
const yours = dropDownMenu("edit", "Rename");
document.body.append(my, yours);
