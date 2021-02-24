// Your JS code here
let unorderedLists = document.getElementsByTagName("ul");
let pleiadesList = unorderedLists[2];
let listItems = pleiadesList.children;
console.log(listItems);
pleiadesList.removeChild(listItems[1]);

let fiadhSection = document.createElement("div");
fiadhSection.className = "small-page-section";

let fiadhHeader = document.createElement("h2");
fiadhHeader.className = "centered";
fiadhHeader.textContent = "Fiadh";

let fiadhParagraph = document.createElement("p");
fiadhParagraph.textContent =
  "Fiadh is the newest star cluster discovery, made by the amazing team at Launch Academy.";

fiadhSection.appendChild(fiadhHeader);
fiadhSection.appendChild(fiadhParagraph);

let mainContainer = document.getElementById("main-container");
mainContainer.appendChild(fiadhSection);
let fiadhImage = document.createElement("img");
fiadhImage.setAttribute(
  "alt",
  "Image of Fiadh the squirrel at her picnic table"
);
fiadhImage.setAttribute(
  "src",
  "https://horizon-production.s3.amazonaws.com/images/article/manipulating-a-webpage/fiadh.jpg"
);
fiadhSection.insertBefore(fiadhImage, fiadhParagraph);

let fiadhFactsSection = document.createElement("div");
fiadhFactsSection.className = "facts-section";
fiadhFactsSection.innerHTML = "<h4>Facts about Fiadh:</h4>";
console.log(fiadhFactsSection);

let fiadhFactsList = document.createElement("ul");
let fiadhFacts = [
  "It is the most visible star cluster to the naked eye.",
  "Fiadh is named after the backyard squirrel domesticated by AmyLynn of the Launch Academy team.",
];

fiadhFacts.forEach((fact) => {
  let listItem = document.createElement("li");
  listItem.textContent = fact;
  fiadhFactsList.appendChild(listItem);
});
fiadhFactsSection.appendChild(fiadhFactsList);
fiadhSection.appendChild(fiadhFactsSection);
