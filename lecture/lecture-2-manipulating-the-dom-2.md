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

<img src={boxes} />

---

An alternative way to look at nodes

<img src={nodeTree} />

---

JavaScript can modify **all** of the HTML elements on the page.

<img src={htmlTree} />

---

## js in HTML?

Before we can change the DOM with js, we need to get js executing...

We can introduce js into our HTML using a `<script>` element

`<script>` elements can be placed in your `<head>` or `<body>`

The js code will be executed when the element is reached...

---

## `script` in HTML

```html

<!DOCTYPE html>
<html>
  <head>
   
		<script>
			console.log("Hello World")
		</script>
		
  </head>
	<body> 
	...
```

This `script` will be executed before the `<body>` is loaded in.

We advise against writing your js directly in your html file, just like we advise against having all your css stylings inside your .html file

---

## js file sourced in HTML

```html

<!DOCTYPE html>
<html>
	<body>
		<h1> My cool site </h1>

		<script src="./fileName.js"></script>
	</body>
</html>
```

This is the preferred way to load in a js file from inside your .html file.

Place it inside, but at the bottom, of your `<body>` element

This way all the previous elements will have loaded into the DOM.

---

## `document`

When we load in a js file through an HTML file, we gain access to some global variables:

`document`, `window`, `location`, `navigator`, (and more)

`document` is an object that represents the entire DOM

It has some methods that we will need soon...

_Note: These objects have no context (do not exist) if you run a js file through node_

---

## now what?

So now we have js in our HTML file

We have this `document` object...

How do we change the HTML with js?

---

## How do we change the HTML with js?

We can find existing elements and change them

or

We can create new elements and insert them into the DOM

---

## Existing elements

HTML elements are treated like objects in the DOM

These `HTML objects` have properties and methods

Before we can call these methods or set their properties, we need to find them in the DOM...

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

## Modifying `HTML objects`

There are several ways of modifying the content HTML elements.

We can set one of the two following properties:

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
title.innerText = "My name is Andrew!"
```

The `<h1>` now looks like this:
```html
<h1>My name is Andrew!</h1>
```

---

## `.innerHTML`

Used to change the HTML inside a DOM element.

```html
<div></div>
```

```js
const div = document.querySelector("div");
div.innerHTML = "<h1>My name is Andrew!</h1>"
```

The `<div>` now looks like this:
```html
<div>
    <h1>My name is Andrew!</h1>
</div>
```

---

## ⚠ use caution

⚠ Both `innerHTML` and `innerText` will replace the content of a DOM element! ⚠

```html
<div>
    <h1>Page title</h1>
</div>
```

```js
const div = document.querySelector(div);
div.innerHTML = "My name is Andrew!"
// or div.innerText = "My name is Andrew!"
```

The `<div>` now looks like this:
```html
<div>My name is Andrew!</div>
```

❗ Notice how we deleted the `<h1>` tag from inside the `<div>`

---

## Adding a new DOM node

To add a new node to an HTML page, you need to do it in 3 steps:

1. Create the new node. 
    - call `document.createElement`
2. Add content to that node. 
    - set `.innerText`
3. Add that node to an existing node. 
    - call `node.appendChild`

---

## Creating and inserting DOM Node

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

## Different Insertion methods

- `appendChild` places the new Node at the bottom of the parent

- `prepend` places the new Node at the top of the parent

- `insertBefore` requires two arguments:
1. the new Node
2. an existing node that is the child of the parent

It will then place the new Node before the second argument

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
