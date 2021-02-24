// Yell real loud
let yellButton = document.getElementById("yell");
yellButton.addEventListener("click", () => {
  yell();
});

let yell = () => {
  document.querySelector(".page-header").textContent = "MY NAME IS STEVE!!!!!";
};

// Make me fierce
let fierceButton = document.getElementById("fierceify");
fierceButton.addEventListener("click", () => {
  fierceify();
});

let fierceify = () => {
  document.getElementsByTagName("img")[0].setAttribute("src", "furious.jpg");
  // another way
  //document.querySelector(".headshot").src = "furious.jpg"
};

// Reveal an Easter egg
let easterEggButton = document.getElementById("easter-egg");
easterEggButton.addEventListener("click", () => {
  eggify();
});

let eggify = () => {
  let eggImg = document.createElement("img");
  eggImg.setAttribute("src", "egg.jpg");
  eggImg.style.width = "200px";
  let parent = document.getElementsByTagName("body")[0];
  parent.appendChild(eggImg);
};

// Select the first paragraph in the document
let selectMeButton = document.getElementById("select-me");
selectMeButton.addEventListener("click", () => {
  selectFirstParagraph();
});

let selectFirstParagraph = () => {
  document.querySelector("p").classList += " selected";

  // ternary way to try (from Lisa)
  // myFaceClassList.contains("hidden")
  // ? myFaceClassList.remove("hidden")
  // : myFaceClassList.add("hidden");
};

// Deselect the first paragraph in the document
let deselectMeButton = document.getElementById("deselect-me");
deselectMeButton.addEventListener("click", () => {
  deselectFirstParagraph();
});

let deselectFirstParagraph = () => {
  document.querySelector("p").classList.remove("selected");
};

// Toggle the visibility of the image of your face
let toggleFaceButton = document.getElementById("toggle-my-face");
toggleFaceButton.addEventListener("click", () => {
  toggleMyFace();
});

let toggleMyFace = () => {
  let headshot = document.querySelector(".basically-me");
  headshot.classList.toggle("hidden");
};

// Reload page when reload button is clicked -- no need to modify anything here!
let reloadButton = document.getElementById("reload");

reloadButton.addEventListener("click", () => {
  location.reload();
});
