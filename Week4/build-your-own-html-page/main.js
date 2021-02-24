// your code here

// We've decided to go vegan. Change the existing list item from "Milk" to "Oat Milk".
list = document.getElementById("grocery-list");
list.children[0].textContent = "Oat Milk";

// We can't exist on oat milk alone! First, query your unordered list using its id, and store it in a variable. Then, create a variable fruits which is an array you create, full of strings of your favorite fruits. Iterate over that array, and for each fruit, create a new list item, add the fruit name to your list item, and add the list item as a child of your unordered list.
let fruits = ["apples", "oranges", "blackberries"];
fruits.forEach((fruit) => {
  let addFruit = document.createElement("li");
  addFruit.textContent = fruit;
  list.appendChild(addFruit);
});

// We need a list of the items in our pantry, so we don't buy anything we already have! Create a new div for your pantry section. Once you've created it, add an id of pantry-section to the div. Add this div underneath your groceries-section, and add a header to this section to indicate what it's for.
let pantrySection = document.createElement("div");
pantrySection.id = "pantry-section";
let body = document.getElementsByTagName("body")[0];
body.appendChild(pantrySection);
let groceriesSection = document.getElementById("groceries-section");
groceriesSection.parentElement.appendChild(pantrySection);

// Add a new ul tag inside the new pantry-section div using .appendChild to add an unordered list, with an id of pantry-list. Then, add a few different list items to this list of things you already have in your kitchen using .innerHTML.
pantrySection.innerHTML = "<h1>What's inside my Pantry</h1>";

let newList = document.createElement("ul");
newList.id = "pantry-list";
pantrySection.appendChild(newList);
newList.innerHTML = "<li>Coffee</li>";
newList.innerHTML += "<li>Yogurt</li>";
newList.innerHTML += "<li>Oatmeal</li>";
newList.innerHTML += "<li>Eggs</li>";

// Woops! We ran out of the last item in our pantry before we went shopping. Remove the last item from your pantry list and add it to the shopping list.
let pList = document.getElementById("pantry-list");
let lastItem = pList.lastChild;
// console.log(lastItem);
list.appendChild(lastItem);
// pList.removeChild(lastItem);

// Add a third div in your body with an id of notes-section. Add a header to indicate that this is the "Notes" section.
let parent = document.getElementsByTagName("body")[0];
div3 = document.createElement("div");
div3.id = "notes-section";
parent.appendChild(div3);
div3Head = document.createElement("h1");
div3Head.innerHTML = "Notes Section";
div3.appendChild(div3Head);

// Add a paragraph tag with some notes on what you want to make for the week. Under the paragraph tag, also add a link to your favorite recipe, with the recipe name as the text appearing on your page.
div3HeadP = document.createElement("p");
parent.appendChild(div3HeadP);
div3HeadP.innerHTML = "Gonna be making some coffee... LOTS of coffee<br>";
div3HeadP.innerHTML += "Oatmeal for breakfast";
