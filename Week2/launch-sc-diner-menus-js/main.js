import createNewIngredient from "./createNewIngredient.js";
import createNewMeal from "./createNewMeal.js";
import createNewMenu from "./createNewMenu.js";

console.log("Welcome to the Launch diner!");

// Part One
let egg = createNewIngredient("egg", "protein");
let tomato = createNewIngredient("tomato", "fruit");
let spinach = createNewIngredient("spinach", "vegetable");
let mushroom = createNewIngredient("mushroom", "vegetable");
let feta = createNewIngredient("feta", "cheese");
let cheddar = createNewIngredient("cheddar", "cheese");
let bacon = createNewIngredient("bacon", "meat");

// Part Two
let greekOmelette = createNewMeal("Greek Omelette", [
  egg,
  tomato,
  spinach,
  feta,
]);

let baconCheeseOmelette = createNewMeal("Bacon and Cheese Omelette", [
  cheddar,
  egg,
  bacon,
]);

let mushroomOmelette = createNewMeal("Mushroom Omelette", [egg, mushroom]);

// Part Three
let breakfastMenu = createNewMenu("Breakfast Menu", 7, 12);
breakfastMenu.addMeal(greekOmelette);
breakfastMenu.addMeal(baconCheeseOmelette);
breakfastMenu.addMeal(mushroomOmelette);
console.log(mushroomOmelette);
breakfastMenu.printMenu();

// Exceeds Part Two

// let luncnodehMenu = createNewMenu('Lunch', 12, 16)
// let dinnerMenu = createNewMenu('Dinner', 16, 24)
// let currentMenus = [breakfastMenu, lunchMenu, dinnerMenu]
