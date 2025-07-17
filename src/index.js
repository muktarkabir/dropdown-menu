import { dropDownMenu } from "./modules/dropdown-menu.js";

const my = dropDownMenu({
  vertical: true,
  items: ["edit", "delete", 3, "copy"],
});
const yours = dropDownMenu({ items: "l" });
document.body.append(my, yours);
console.log(my.childNodes[1].childNodes[0]);
