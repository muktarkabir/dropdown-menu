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
  dots.style.fontSize = ".9rem";
  vertical
    ? (dots.innerHTML = `<span>●</span><br/><span>●</span><br/><span>●</span>`)
    : (dots.innerHTML = `<span>●</span><span>●</span><span>●</span>`);
  const menu = document.createElement("div");
  document.body.append(menu);
  document.body.append(dots);
  menu.dataset.open = false;
  menu.style.position = "absolute";
  menu.style.zIndex = 50;
  menu.style.minWidth = "8ch";
  menu.style.backgroundColor = "#fff";
  menu.style.fontSize = "1rem";
  menu.style.display = "none";
  menu.style.padding = "2px 0px";
  menu.style.borderRadius = "4px";
  menu.style.border = "1px solid currentColor";
  positionMenu();
  items.forEach((arguemt, index) => {
    if (typeof arguemt !== "string") {
      throw new Error("arguments must be strings");
    }
    const item = document.createElement("div");
    item.style.cursor = "pointer";
    if (index !== 0) item.style.borderTop = "1px solid currentColor";
    item.style.padding = "6px";
    item.innerHTML = `${arguemt}`;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });
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
    menu.style.top = `${rect.bottom + 4 + window.scrollY}px`;
    menu.style.left = `${rect.left + window.scrollX}px`;
  }

  return dots;
};
