import { dropDownMenu } from "./modules/dropdown-menu.js";

const my = dropDownMenu({
  vertical: true,
  items: ["Edit", "Delete", "Move", "Copy"],
});
const yours = dropDownMenu({ items: ["Edit", "Rename"] });
document.body.append(my, yours);
