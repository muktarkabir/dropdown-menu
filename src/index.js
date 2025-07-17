import { dropDownMenu } from "./modules/dropdown-menu.js";

dropDownMenu({
  parent: document.querySelector(".parent"),
  vertical: true,
  items: ["Edit", "Delete", "Move", "Copy"],
});

const yours = dropDownMenu({
  parent: document.querySelector(".parent"),
  items: ["Edit", "Rename"],
});
yours.menuItems()[0].addEventListener("click", (e) => {
  console.log(e.target);
});
console.log(yours.menuItems());
