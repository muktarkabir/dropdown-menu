import { dropDownMenu } from "./modules/dropdown-menu.js";

const my = dropDownMenu({
  vertical: true,
  items: ["edit", "delete", "move", "copy"],
});
const yours = dropDownMenu({ items: ["edit", "Rename"] });
document.body.append(my, yours);
