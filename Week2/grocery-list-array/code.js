//your code here
// Creates an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
let groceryList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

// Adds 'fruit loops' to the list.
groceryList.push("fruit loops");

// Updates 'coffee' to 'fair trade coffee'
coffeePos = groceryList.indexOf("coffee");
groceryList[coffeePos] = "fair trade coffee";

// Replaces 'chips' and 'salsa' with 'rice' and 'beans'
chipsPos = groceryList.indexOf("chips");
groceryList[chipsPos] = "rice";

salsaPos = groceryList.indexOf("salsa");
groceryList[salsaPos] = "beans";

// Creates an empty array to represent your shopping cart.
let shoppingCartList = [];

// Removes the last item from your shopping list and add it to your cart
let item = groceryList[groceryList.length - 1];
groceryList.pop();
shoppingCartList.unshift(item);

// Removes the first item from your shopping list and add it to the cart
item = groceryList[0];
groceryList.shift();
shoppingCartList.push(item);

// Writes a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
while (groceryList.length > 0) {
  item = groceryList[0];
  groceryList.shift();
  shoppingCartList.push(item);
}

// Sorts the items in your cart alphabetically... backwards
shoppingCartList.sort();
shoppingCartList.reverse();

// Prints the list of items in your shopping cart to the console as a comma separated string.
console.log("grocery cart: " + shoppingCartList);
