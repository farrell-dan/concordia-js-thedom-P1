// Add your code here!
const main = document.querySelector("main");

const headerOne = document.createElement("h1");
headerOne.innerText = "The Best Burger in New York";
main.appendChild(headerOne);

const paragraphOne = document.createElement("p");
paragraphOne.innerText = " Burger fanatic Marshall meets Regis Philbin while on a quest to find the restaurant where he had his very first New York burger."
main.appendChild(paragraphOne);

const headerTwo = document.createElement("h2");
headerTwo.innerText = "The Burger Episode (Season 4, Episode 2)";
main.appendChild(headerTwo);

const paragraphTwo = document.createElement("p");
paragraphTwo.innerText = "IMDB Rating: 8.4"
main.appendChild(paragraphTwo)

const image = document.createElement("img");
image.src = "./images/burger.png";
image.alt = "Best Burger";
main.appendChild(image);

const paragraphThree = document.createElement("p");
paragraphThree.innerText = "The gang is at McLarens and Robin, just off her 7 days cleanse 5 days early, is dying for any kind of food. When she hears the special is a burger, she orders five for the group. However, when Marshall gets his, he refuses to eat it. After all, once you've had the best burger in New York, all other's taste like his uncle's feet."
main.appendChild(paragraphThree);

const paragraphFour = document.createElement("p");
paragraphFour.innerText = "If they're eating burgers tonight, they're eating the best burgers in New York; the journey begins. We learn that when Marshall first moved to New York with Ted, the first time he left their apartment he discovered this burger joint. It simply had a green door and a red neon sign that said \"burger.\" "
main.appendChild(paragraphFour);

const paragraphFive = document.createElement("p");
paragraphFive.innerText = "Since he had just moved, he couldn't remember how to get back there; just that it was on a numbered street. Now, eight years later, after searching all night, they finally find the place. It has been replaced by an ATM for Barney's new bank."
main.appendChild(paragraphFive);

const hlink = document.createElement("a");
hlink.innerText = "Source";
hlink.target = "_blank";
hlink.href = "https://www.tvfanatic.com/shows/how-i-met-your-mother/episodes/season-4/the-best-burger-in-new-york/#:~:text=Recap,he%20refuses%20to%20eat%20it.";
main.appendChild(hlink);

//look at how to add a hyperlink in javascript


const head = document.querySelector("head");
const link = document.createElement("link");
link.rel = "stylesheet"
link.href = "styles.css"
head.appendChild(link);
