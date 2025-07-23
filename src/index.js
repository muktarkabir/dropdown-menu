import { dropDownMenu } from "./modules/dropdown-menu.js";

const menu1 = dropDownMenu({
  parent: document.querySelector(".parent"),
  vertical: true,
  items: ["Edit", "Delete", "Move", "Copy"],
});

const menu2 = dropDownMenu({
  anchor: document.querySelector(".anchor"),
  items: ["Edit", "Rename"],
});
menu2.menuItems()[0].addEventListener("click", (e) => {
  console.log(e.target);
});

menu1.addClickListenerToMenuItem({
  itemIndex: 1,
  action: (e) => {
    console.log(e.target);
    console.log("Something");
    window.location.reload();
  },
});
