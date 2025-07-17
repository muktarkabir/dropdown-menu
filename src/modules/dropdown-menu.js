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
  const dots = document.createElement("p");
  dots.style.cursor = "pointer";
  dots.style.position = "relative";
  vertical
    ? (dots.innerHTML = `<span>●</span><br/><span>●</span><br/><span>●</span>`)
    : (dots.innerHTML = `<span>●</span><span>●</span><span>●</span>`);
  // dropDownMenu.append(dots);
  const menu = document.createElement("div");
  document.body.append(menu);
  document.body.append(dots);
  menu.dataset.open = false;
  menu.style.position = "absolute";
  menu.style.left = 0;
  menu.style.top = `100%`;
  menu.style.zIndex = 50;
  menu.style.minWidth = "max-content";
  menu.style.backgroundColor = "#fff";
  menu.style.display = "none";
  menu.style.padding = "2px 6px";
  menu.style.borderRadius = "4px";
  menu.style.border = "1px solid currentColor";
  positionMenu();
  items.forEach((arguemt) => {
    if (typeof arguemt !== "string") {
      throw new Error("arguments must be strings");
    }
    const item = document.createElement("div");
    item.style.cursor = "pointer";
    item.innerHTML = `${arguemt}`;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });
  // dropDownMenu.append(menu);
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
  menu.addEventListener("click", (e) => {
    console.log(e.target);
  });

  function openMenu() {
    menu.style.display = "block";
    menu.dataset.open = true;
  }
  function closeMenu() {
    menu.style.display = "none";
    menu.dataset.open = false;
  }
  function positionMenu() {
    const rect = dots.getBoundingClientRect();
    console.log(rect);

    menu.style.top = `${rect.bottom}px`;
    menu.style.left = `${rect.left}px`;
  }

  return dots;
};
