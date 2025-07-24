# dropdown-menu
**drop-down-menu**

A lightweight, dependency-free JavaScript module to create and attach a customizable dropdown menu to any element or container on the page. It supports vertical or horizontal "dots" toggles, automatic positioning, and easy item click handling.

---

## 🚀 Installation

Install from npm:

```bash
npm install @muktarkabir/@muktarkabir/dropdown-menu
```

Import the module in your project:

```js
import { dropDownMenu } from "@muktarkabir/dropdown-menu";
```

---

## 🎨 CSS

A default stylesheet is provided. You can override any styles by including your own CSS rules after importing `dropdown.css`.

```css
/* Example override */
.menu{
    min-width: 12ch;
    font-size:2rem;
} 

.item:hover {
  background-color: #f0f8ff;
}
```

---

## 📦 API

### `dropDownMenu(options)`

Creates and attaches a dropdown menu.

#### Options

| Property   | Type       | Required                  | Default | Description                                                                                             |
| ---------- | ---------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `parent`   | `Element`  | *either parent or anchor* | —       | An existing container element where the menu button and dropdown will be rendered.                      |
| `anchor`   | `Element`  | *either parent or anchor* | —       | An existing element to serve as the toggle button. If provided, the module will attach to this element. |
| `vertical` | `boolean`  | *optional*                | `false` | When `true`, uses vertical dots (`⋮`) instead of horizontal (`⋯`). Cannot be used with `anchor`.        |
| `items`    | `string[]` | `yes`                     | —       | An array of text labels for menu items.                                                                 |

> ⚠️ **Note:** You must provide exactly one of `parent` or `anchor`, not both.

#### Returns

An object with:

* `menuButton` (`Element`): The toggle element (dots or your anchor). Append this to the DOM if it was created internally.
* `menuItems()` (`() => Element[]`): A function returning the list of created menu item elements.
* `addClickListenerToMenuItem({ itemIndex, action })` (`Function`): Attach a custom callback to a specific item by index.

---

## 🎉 Usage Examples

### 1. Attach to a Container

```html
<div id="card" class="tile">
  <h2>My Tile</h2>
</div>
```

```js
import { dropDownMenu } from "@muktarkabir/dropdown-menu";

const container = document.getElementById("card");
const { menuButton, addClickListenerToMenuItem } = dropDownMenu({
  parent: container,
  vertical: true,
  items: ["Edit", "Delete", "Share"]
});

// Optionally bind custom actions:
addClickListenerToMenuItem({
  itemIndex: 0,
  action: () => alert("Edit clicked")
});

// If parent was used, the menu button is already appended; no further action needed.
const menu1 = dropDownMenu({
  parent: document.querySelector(".parent"),
  vertical: false,
  items: ["Edit", "Delete", "Move", "Copy"],
});
menu1.addClickListenerToMenuItem({
  itemIndex: 1,
  action: (e) => {
    console.log(e.target);
    console.log("Something");
    window.location.reload();
  },
});
```

---

### 2. Use an Existing Anchor Element

```html
<button id="more-btn">More</button>
```

```js
const anchor = document.getElementById("more-btn");
const { menuButton } = dropDownMenu({
  anchor,
  items: ["Settings", "Help"]
});


const menu2 = dropDownMenu({
  anchor: document.querySelector(".anchor"),
  items: ["Edit", "Rename"],
});

//Alternatively add an event listener to the dropdowwn itself and use event delegation to register clicks
menu2.menuItemsContainer().addEventListener("click", (e) => {
  console.log('Clicked on item:', event.target.textContent);
});


// The provided anchor will automatically toggle the dropdown on click.
```

---

## ⚙️ Customization & Styling

* **Dots**: default size `1.6rem`, you can override via:

  ```css
  .menu {
    font-size: 2rem;
  }
  ```
* **Menu**: default padding, border, and background, override via:

  ```css
  .menu {
    background-color: #222;
    color: #fff;
  }
  .menu .item:hover {
    background-color: #333;
  }
  ```

---

## 🧹 Cleanup

Currently, the module does not expose a destroy method. To remove the dropdown and listeners, manually remove the elements and event listeners:

```js
// Assuming you stored references:
document.body.removeChild(menuElement);
dotsElement.remove();
window.removeEventListener("click", /* your handler */);
```

(Feature request: future versions may add `destroy()`.)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a GitHub issue or pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/foo`).
3. Commit your changes (`git commit -m "feat: add bar"`).
4. Push to the branch (`git push origin feature/foo`).
5. Open a pull request.

---

## 📄 License

MIT © 2025 Muktar Muhammad Kabir
