import "./dropdown.css";

export const anchorDropDownMenu = ({ anchor, items }) => {
  if (!anchor) throw new Error("Provide an anchor element.");
  if (!(anchor instanceof Element))
    throw new Error("Anchor must be an HTML element.");
  if (!Array.isArray(items)) throw new Error("Items must be in an array");

  anchor.style.cursor = "pointer";
  anchor.style.position = "relative";

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.style.display = "none";
  menu.dataset.open = false;
  document.body.append(menu);

  items.forEach((arguemt, index) => {
    if (typeof arguemt !== "string")
      throw new Error("All items must be strings");
    const item = document.createElement("div");
    item.classList.add("item");
    if (index !== 0) item.style.borderTop = "1px solid rgba(0,0,0,0.2)";
    item.textContent = arguemt;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });

  anchor.addEventListener("click", () => {
    menu.style.display === "none" ? openMenu() : closeMenu();
  });

  window.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !anchor.contains(e.target) &&
      menu.dataset.open === "true"
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", positionMenu);
  window.addEventListener("scroll", positionMenu);

  function positionMenu() {
    const rect = anchor.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.left = `${rect.left}px`;
  }

  function openMenu() {
    menu.style.display = "block";
    menu.dataset.open = true;
  }

  function closeMenu() {
    menu.style.display = "none";
    menu.dataset.open = false;
  }

  function menuItemsContainer() {
    return menu;
  }

  const addClickListenerToMenuItem = ({ itemIndex, action }) => {
    if (typeof itemIndex !== "number")
      throw new Error("Provide a number for the index");
    if (!menu.children[itemIndex]) throw new Error("Index out of bounds");
    if (typeof action !== "function")
      throw new Error("Action must be a function");
    menu.children[itemIndex].addEventListener("click", action);
  };

  return { menuButton: anchor, menuItemsContainer, addClickListenerToMenuItem };
};

export const dotsDropDownMenu = ({ parent, items, vertical = false }) => {
  if (!parent) throw new Error("Provide a parent element.");
  if (!(parent instanceof Element))
    throw new Error("Parent must be an HTML element.");
  if (typeof vertical !== "boolean")
    throw new Error("Vertical must be a boolean");
  if (!Array.isArray(items)) throw new Error("Items must be an array");

  const dots = document.createElement("div");
  dots.classList.add("dots");
  dots.innerHTML = vertical ? "⋮" : "⋯";
  parent.append(dots);

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.style.display = "none";
  menu.dataset.open = false;
  parent.style.position = "static";
  parent.append(menu);

  items.forEach((arguemt, index) => {
    if (typeof arguemt !== "string")
      throw new Error("All items must be strings");
    const item = document.createElement("div");
    item.classList.add("item");
    if (index !== 0) item.style.borderTop = "1px solid rgba(0,0,0,0.2)";
    item.textContent = arguemt;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });

  dots.addEventListener("click", () => {
    menu.style.display === "none" ? openMenu() : closeMenu();
  });

  window.addEventListener("click", (e) => {
    if (
      !menu.contains(e.target) &&
      !dots.contains(e.target) &&
      menu.dataset.open === "true"
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", positionMenu);
  window.addEventListener("scroll", positionMenu);

  function positionMenu() {
    const rect = dots.getBoundingClientRect();
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.left = `${rect.left}px`;
  }

  function openMenu() {
    menu.style.display = "block";
    menu.dataset.open = true;
  }

  function closeMenu() {
    menu.style.display = "none";
    menu.dataset.open = false;
  }

  function menuItemsContainer() {
    return menu;
  }

  const addClickListenerToMenuItem = ({ itemIndex, action }) => {
    if (typeof itemIndex !== "number")
      throw new Error("Provide a number for the index");
    if (!menu.children[itemIndex]) throw new Error("Index out of bounds");
    if (typeof action !== "function")
      throw new Error("Action must be a function");
    menu.children[itemIndex].addEventListener("click", action);
  };

  return { menuButton: dots, menuItemsContainer, addClickListenerToMenuItem };
};
