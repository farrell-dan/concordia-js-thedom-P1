---
marp: true
---

# Manipulating the DOM

---

When you load a web page in the browser...

1. Retrieves the HTML text and parses it.
2. Builds a model of the document structure.
3. Uses this model to render the page on the screen.

This is known as the **D**ocument **O**bject **M**odel, A.K.A. the **DOM**.

---

The DOM is a data structure that we can read and modify.

It acts as a live data structure. 

When it's modified, the page on the screen is updated. 🤯

---

You can see it in your developer tools in the browser.
It looks almost identical to the HTML you wrote...

The DOM is actually your **_corrected_** HTML.
⚠️ This means that it is impossible to debug your HTML with the dev tools.

---

- For each box, there is an object that we can interact with.
- Each node may contain/refer to other nodes that we call children.
- Similar to a tree.
- End nodes are usually called leaves.

![node boxes](assets/html-boxes.svg)

---

An alternative way to look at nodes

![node tree](assets/html-tree.svg)

---

JavaScript can modify **all** of the HTML elements on the page.

![html nodes](assets/node-tree.gif)

---

## Targetting Elements in JS

To select an HTML element through JS, we use `document.querySelector()`. This takes a CSS selector as an argument.

```html
<div class="container">
    <h1 id="title">The title</h1>
    <p>The paragraph</p>
</div>
```

```js
// querying the class
const container = document.querySelector('.container');

// quering the tag
const paragraph = document.querySelector("p");

// querying the id
const title = document.querySelector('#title');
```

---

## Targetting Elements in JS

We can also target things through `document.getElementById()`. This is faster than `querySelector()` because it only handles ids.

```html
<div class="container">
    <h1 id="title">The title</h1>
    <p>The paragraph</p>
</div>
```

```js
const title = document.getElementById("title")
```

Notice there is no #. It can only query ids so there is no need to specify the selector.

---

## Modifying a DOM node

There are 2 ways of modifying HTML elements:
- `.innerText`
- `.innerHTML`

---

## `.innerText`

Used to change the text of a DOM element.

```html
<h1>Page title</h1>
```

```js
const title = document.querySelector("h1");
title.innerText = "My name is Rony!"
```

The `<h1>` now looks like this:
```html
<h1>My name is Rony!</h1>
```

---

## `.innerHTML`

Used to change the HTML inside a DOM element.

```html
<div></div>
```

```js
const div = document.querySelector("div");
div.innerHTML = "<h1>My name is Rony!</h1>"
```

The `<div>` now looks like this:
```html
<div>
    <h1>My name is Rony!</h1>
</div>
```

---

## `innerHTML`

⚠ It's important not to use innerHTML to change the text of a DOM element! ⚠

```html
<div>
    <h1>Page title</h1>
</div>
```

```js
const div = document.querySelector(div);
div.innerHTML = "My name is Rony!"
```

The `<div>` now looks like this:
```html
<div>My name is Rony!</div>
```

❗ Notice how we deleted the `<h1>` tag from inside the `<div>`

---

## Creating a DOM node

To add a new node to an HTML page, you need to do it in 3 steps:
1. Create the new node. 
    - `document.createElement()`
2. Add content to that node. 
    - `innerText`
3. Add that node to an existing node. 
    - `node.appendChild()`

---

## Creating a DOM Node

```js
const body = document.querySelector("body");
const paragraph = document.createElement("p");

paragraph.innerText = "This is an awesome paragraph!";

body.appendChild(paragraph);
```

```html
<body>
    <!-- this p tag was inserted through JS -->
    <p>This is an awesome paragraph!</p>
</body>
```

We typically want  `node.appendChild()` to happen last. Make sure our element is fully modified before we put it on the page.

---

## Styling a DOM Node

We can modify the style of a node too!

```js
const container = document.querySelector('.container');

container.style.background = “purple”;
```

Doing this adds **_inline_** CSS (this means the style is directly put as an attribute on the HTML element, instead of coming from the CSS stylesheet).

---

## Styling a DOM Node

You can modify a node’s class attribute with `.classList`

`myDiv.classList` returns a DOMTokenList that is read only. 😭

But it modifiable with various methods! 😃

- `node.classList.add()`
- `node.classList.remove()`
- `node.classList.toggle()`
