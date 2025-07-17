import "./dropdown.css";
export const dropDownMenu = ({ anchor, vertical, items }) => {
  if (anchor) {
    if (typeof anchor !== Element) {
      throw new Error("Anchor must be a valid html object.");
    }
  }
  if (vertical) {
    if (typeof vertical !== "boolean") {
      throw new Error("Vertical option must be a boolean value.");
    }
  }
  if (!Array.isArray(items)) {
    throw new Error("Items must be in an array");
  }
  const dropDownMenu = document.createElement("div");
  dropDownMenu.classList.add("drop-down");
  const dots = document.createElement("p");
  dots.classList.add("dots");
  //   dots.style.position = 'relative';
  vertical
    ? (dots.innerHTML = `<span>●</span><br/><span>●</span><br/><span>●</span>`)
    : (dots.innerHTML = `<span>●</span><span>●</span><span>●</span>`);
  dropDownMenu.append(dots);
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.dataset.open = false;
  //   menu.style.position = 'absolute';
  items.forEach((arguemt) => {
    if (typeof arguemt !== "string") {
      throw new Error("arguments must be strings");
    }
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `${arguemt}`;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });
  dropDownMenu.append(menu);
  dots.addEventListener("click", () => {
    if (menu.style.display === "none") {
      openMenu();
    } else {
      closeMenu();
    }
  });
  window.addEventListener("click", function (e) {
    if (
      !menu.contains(e.target) &&
      !dots.contains(e.target) &&
      menu.dataset.open === "true"
    ) {
      closeMenu();
    } else {
      return;
    }
  });

  function openMenu() {
    menu.setAttribute("style", "display: block");
    menu.dataset.open = true;
  }
  function closeMenu() {
    menu.setAttribute("style", "display: none");
    menu.dataset.open = false;
  }

  return dropDownMenu;
};
