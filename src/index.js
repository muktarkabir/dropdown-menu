import {
  anchorDropDownMenu,
  dotsDropDownMenu,
} from "./modules/dropdown-menu.js";
import "./global-styles.css";

const menu1 = dotsDropDownMenu({
  parent: document.querySelector(".parent"),
  vertical: true,
  items: ["Edit", "Delete", "Move", "Copy"],
});

const menu2 = anchorDropDownMenu({
  anchor: document.querySelector(".anchor"),
  items: ["Edit", "Rename"],
});
menu2.menuItemsContainer().addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});

menu1.addClickListenerToMenuItem({
  itemIndex: 1,
  action: (e) => {
    console.log(e.target);
    console.log("Something");
    window.location.reload();
  },
});
