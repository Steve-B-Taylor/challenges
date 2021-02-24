// your code here
// Print to the console the text of any elements with a class of oh-no
console.log("1:");
console.log(document.getElementsByClassName("oh-no").item(0));

// Print to the console the tag name of the element with an id of hashtag-inspiration
console.log("2:");
console.log(document.getElementById("hashtag-inspiration"));

// Print to the console the all the HTML contained within any elements with a class of tv
let tvClass = document.getElementsByClassName("tv");
let i = tvClass.length;
console.log("3:");
while (i > 0) {
  console.log(document.getElementsByClassName("tv").item(i - 1));
  i--;
}

// Reluctantly fix the typo "Never gonna run around and dessert you" to "Never gonna run around and desert you", where "desert" has one s
let fixIt = document.getElementsByClassName(
  "intentional-misspelling-of-desert"
);
fixIt[0].textContent = "Never gonna run around and desert you";

// Replace the text in the fourth child of the element with an id of purple-jaguar-eye with lyrics of your choosing
let prplJag = document.getElementById("purple-jaguar-eye");
let prplJagChildren = prplJag.children;
prplJagChildren[3].textContent =
  "We're just two lost souls swimming in a fish bowl...";

// Turn each <h2> into an <h3>
// let h2s = document.querySelectorAll("h2");

// h2s.forEach((element) => {
//   h3s = document.createElement("h3");

//   for (let i = 0; i < h2Elem.attributes.length; i++) {
//     const attr = h2Elem.attributes[i];
//     h3s.setAttribute(attr.name, attr.value);
//   }

//   h3s.innerHTML = h2Elem.innerHTML;
//   h2Elem.replaceWith(h3s);
// });

// Alternate method to turn each <h2> into an <h3> (Margret)
// let headerTwos = document.querySelectorAll("h2");
// let headerTwosLength = headerTwos.length;
// for (let i = 0; i < headerTwosLength; i++) {
//   let currentHead = headerTwos[i].parentElement.firstElementChild;
//   currentHead.outerHTML = currentHead.outerHTML.replace(/h2/g, "h3");
// }

// Another alternate to turn each <h2> to an <h3> (Lisa)
document.querySelectorAll("h2").forEach((el) => {
  el.outerHTML = el.outerHTML.replace(/h2/g, "h3");
});

// Add a class of scary-thoughts to the element with an id of woof
let woof = document.getElementById("woof");
let scary = woof.setAttribute("class", "scary-thoughts");

// Add an image of a fish as the last child of the element with an id of shes-the-one-for-me
var image = document.createElement("img");
var imageParent = document.getElementById("shes-the-one-for-me");
image.src = "fish.svg";
imageParent.appendChild(image);

// Delete the class rickroll from the div that also contains the class limerickroll
let rick = document
  .getElementsByClassName("limerickroll")[0]
  .classList.remove("rickroll");

// Add your own lyrics to the element with an id of lyrics by adding one additional <p>
daddyShark = document.getElementById("lyrics");
daddyDiv = document.createElement("div");
daddyDiv.className = "Baby-Shark";
daddyDiv.id = "Doo doo, doo doo doo doo";
console.log(daddyDiv);
daddyShark.appendChild(daddyDiv);

sharkTitle = document.getElementById("Doo doo, doo doo doo doo");
daddyHThree = document.createElement("h3");
daddyHThree.setAttribute("class", "title");
daddyHThree.textContent = "Baby Shark!";
daddyHThree.id = "BabyShark";
sharkTitle.appendChild(daddyHThree);

sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Baby Shark";
sharkTitle.appendChild(sharkLyrics);

sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Doo doo, doo doo doo doo";
sharkTitle.appendChild(sharkLyrics);
sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Baby Shark";
sharkTitle.appendChild(sharkLyrics);
sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Doo doo, doo doo doo doo";
sharkTitle.appendChild(sharkLyrics);
sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Baby Shark";
sharkTitle.appendChild(sharkLyrics);
sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Doo doo, doo doo doo doo";
sharkTitle.appendChild(sharkLyrics);
sharkLyrics = document.createElement("p");
sharkLyrics.textContent = "Baby Shark!";
sharkTitle.appendChild(sharkLyrics);

// Add a new paragraph explaining what your favorite song is as the last child of <body>
sharkP = document.getElementsByTagName("body");
sharkBlurb = document.createElement("p");
sharkBlurb.textContent =
  "How can you not love some Baby Shark?  Everyone knows it, everyone can sing it!";
sharkP[0].appendChild(sharkBlurb);

// Add an attribute called foo, with a value of bar, to each child of the element with a class of rickroll
rick = document.getElementsByClassName("rickroll");
for (i = 0; i < rick.length; i++) {
  rick[i].setAttribute("foo", "bar");
}
