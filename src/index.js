import { dropDownMenu } from "./modules/dropdown-menu.js";

const my = dropDownMenu("edit", "delete", "move", "copy");
const yours = dropDownMenu("edit", "Rename");
document.body.append(my, yours);
