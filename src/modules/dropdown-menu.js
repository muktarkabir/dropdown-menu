import "./dropdown.css";
export const dropDownMenu = ({ anchor, parent, vertical, items }) => {
  if (!parent && !anchor) {
    throw new Error(
      "Provide a parent element or an existing element to anchor drop down menu to",
    );
  }
  if (parent) {
    if (!(parent instanceof Element)) {
      throw new Error("Parent element must be a valid html object.");
    }
    if (!document.body.contains(parent)) {
      throw new Error("Parent must be inside the body of the document.");
    }
  }
  if (anchor) {
    if (!(anchor instanceof Element)) {
      throw new Error("Anchor must be a valid html object.");
    }
    if (!document.body.contains(anchor)) {
      throw new Error("Anchor must be inside the body of the document.");
    }
    if (vertical) {
      throw new Error("Cant accept a vertical value if using anchor property");
    }
  }
  if (anchor && parent) {
    throw new Error(
      "There cannot be a parent element if there is an anchor element.",
    );
  }
  if (vertical) {
    if (typeof vertical !== "boolean") {
      throw new Error("Vertical option must be a boolean value.");
    }
  }
  if (!Array.isArray(items)) {
    throw new Error("Items must be in an array");
  }
  let dots;
  if (!anchor) {
    dots = document.createElement("div");
    dots.style.cursor = "pointer";
    dots.style.fontSize = "1.6rem";
    dots.style.display = "inline-block";
    dots.style.margin = "0";
    dots.style.position = "relative";
    vertical ? (dots.innerHTML = `⋮`) : (dots.innerHTML = `⋯`);
    parent.append(dots);
  } else {
    dots = anchor;
    dots.style.cursor = "pointer";
    dots.style.position = "relative";
  }

  const menu = document.createElement("div");
  document.body.append(menu);
  menu.dataset.open = false;
  menu.style.position = "absolute";
  menu.style.zIndex = 50;
  menu.style.minWidth = "8ch";
  menu.style.backgroundColor = "#fff";
  menu.style.fontSize = "1rem";
  menu.style.display = "none";
  menu.style.padding = "0px";
  menu.style.borderRadius = "4px";
  menu.style.border = "1px solid rgba(0,0,0,0.2)";
  positionMenu();

  if (!anchor) {
    dots.parentElement.style.position = "static";
    dots.parentElement.append(menu);
    console.log(dots.parentElement);
    console.log(dots.style);
  }

  items.forEach((arguemt, index) => {
    if (typeof arguemt !== "string") {
      throw new Error("arguments must be strings");
    }
    //TODO:Make it so that html elements can be accepted.
    const item = document.createElement("div");
    item.classList.add("item");
    if (index !== 0) item.style.borderTop = "1px solid rgba(0,0,0,0.2)";
    item.textContent = `${arguemt}`;
    item.addEventListener("click", closeMenu);
    menu.append(item);
  });
  dots.addEventListener("click", () => {
    menu.style.display === "none" ? openMenu() : closeMenu();
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
  window.addEventListener("resize", positionMenu);
  window.addEventListener("scroll", positionMenu);

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
    menu.style.top = `${rect.bottom + 4}px`;
    menu.style.left = `${rect.left}px`;
  }
  function menuItems() {
    return [...menu.children];
  }
  const addClickListenerToMenuItem = ({ itemIndex, action }) => {
    if (typeof itemIndex !== "number") {
      throw new Error("Provide a number for the index");
    }
    if (!menu.children[itemIndex]) {
      throw new Error("Please Provide an index within the range");
    }
    if (typeof action !== "function") {
      throw new Error("Provide an valid function");
    }
    menu.children[itemIndex].addEventListener("click", action);
  };

  return { menuButton: dots, menuItems, addClickListenerToMenuItem };
};
