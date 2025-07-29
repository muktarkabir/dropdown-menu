# dropdown-menu
**drop-down-menu**

A lightweight, dependency-free JavaScript module to create and attach a customizable dropdown menu to any element or container on the page. It supports vertical or horizontal "dots" toggles, automatic positioning, and easy item click handling.

---

## 🚀 Installation

Install from npm:

```bash
npm install @muktarkabir/dropdown-menu
```

Import the module you want to use in your project:

```js
import { dotsDropDownMenu,anchorDropDownMenu } from "@muktarkabir/dropdown-menu";
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

.dots{
    color: orange;
}
```

---

## 📦 API

There are two modules available for use: `anchorDropDownMenu` which is attached to an existing anchor element. `dotsDropDownMenu` which generates a dots button that toggles the visibility of the menu.

### `anchorDropDownMenu(options)`

Creates and attaches a dropdown menu to an existing element.

#### Options

| Property | Type      | Required | Default | Description |
| -------- | ----------| -------- | ------- | ----------  |  
| `anchor` | `Element` | `yes`    | —       | An existing element the rendered dropdown will be associated with, Clicking this will toggle the menu visibility. |
| `items`  | `string[]`| `yes`    | —       | An array of text labels for menu items. |

#### Returns

An object with:

* `menuButton` (`Element`): The toggle element (your anchor).
* `menuItemsContainer()` (`() => Element`): A function returning the dropdown menu.
* `addClickListenerToMenuItem({ itemIndex, action })` (`Function`): Attach a custom callback to a specific item by index.

### `dotsDropDownMenu(options)`

Creates and attaches a dropdown menu to a generated dots button.

#### Options

| Property   | Type       | Required | Default | Description |
| ---------- | ---------- | -------- | ------- | ----------- |
| `parent`   | `Element`  |  `yes`   | —       | A parent element where the menu button will be rendered in. |
| `vertical` | `boolean`  | *optional* | `false` | When `true`, uses vertical dots (`⋮`) instead of horizontal (`⋯`). |
| `items`    | `string[]` | `yes`    | —       | An array of text labels for menu items. |


#### Returns

An object with:

* `menuButton` (`Element`): The toggle element (dots). 
* `menuItemsContainer()` (`() => Element`): A function returning the dropdown menu.
* `addClickListenerToMenuItem({ itemIndex, action })` (`Function`): Attach a custom callback to a specific item by index.

---

## 🎉 Usage Examples

### 1. Attach to a Container

```html
<div id="parent"></div>
```

```js
import { anchorDropDownMenu,dotsDropDownMenu } from "@muktarkabir/dropdown-menu";

const container = document.getElementById("parent");

const menu1 = dropDownMenu({
  parent: container,
  vertical: false,
  items: ["Edit", "Delete", "Move", "Copy"],
});
menu1.addClickListenerToMenuItem({
  itemIndex: 1,
  action: (e) => {
    console.log(e.target);
    doSomething();
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

const menu2 = dropDownMenu({
  anchor: anchor,
  items: ["Edit", "Rename"],
});

//Alternatively add an event listener to the dropdowwn itself and use event delegation to register clicks on items.
menu2.menuItemsContainer().addEventListener("click", (e) => {
  console.log('Clicked on item:', e.target.textContent);
});


// The provided anchor will automatically toggle the dropdown on click.
```

---

## ⚙️ Customization & Styling

* **Dots**: default size `1.6rem`, you can override via:

  ```css
  .dots {
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
