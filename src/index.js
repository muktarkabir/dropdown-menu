import { dropDownMenu } from "./modules/dropdown-menu.js";

const my = dropDownMenu({
  parent: document.querySelector(".parent"),
  vertical: true,
  items: ["Edit", "Delete", "Move", "Copy"],
});

const yours = dropDownMenu({
  anchor: document.querySelector(".anchor"),
  items: ["Edit", "Rename"],
});
yours.menuItems()[0].addEventListener("click", (e) => {
  console.log(e.target);
});

my.addClickListenerToMenuItem({
  itemIndex: 1,
  action: (e) => {
    console.log(e.target);
    console.log("Something");
    window.location.reload();
  },
});
