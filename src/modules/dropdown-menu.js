import "./dropdown.css";
export const dropDownMenu = (...args) => {
  const dropDownMenu = document.createElement("div");
  dropDownMenu.classList.add("drop-down");
  const dots = document.createElement("div");
  dots.classList.add("dots");
  dots.innerHTML = `<span>●</span><span>●</span><span>●</span>`;
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.dataset.open = false;
  args.forEach((arguemt) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `${arguemt}`;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });
  dropDownMenu.append(dots, menu);
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
