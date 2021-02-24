//your code here
// Creates an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
const shoppingList = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];

// Adds 'fruit loops' to the list.
shoppingList.push("fruit loops");

// Updates 'coffee' to 'fair trade coffee'
const updateCoffee = shoppingList.indexOf("coffee");
shoppingList.splice(updateCoffee, 1, "fair trade coffee");

// Replaces 'chips' and 'salsa' with 'rice' and 'beans'
const updateChips = shoppingList.indexOf("chips");
shoppingList.splice(updateCoffee, 1, "rice");

const updateSalsa = shoppingList.indexOf("salsa");
shoppingList.splice(updateCoffee, 1, "beans");

// Creates an empty array to represent your shopping cart.
const shoppingCart = [];

// Removes the first item from your shopping list and add it to the cart
lastItem = shoppingList.pop();
firstItem = shoppingList.shift();

// Removes the first item from your shopping list and add it to the cart
shoppingCart.push(lastItem);
shoppingCart.unshift(firstItem);

// Writes a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
loop = shoppingList.length;
while (loop > 0) {
  shoppingCart.push(shoppingList[0]);
  shoppingList.shift();
  loop--;
}

// Sorts the items in your cart alphabetically... backwards
shoppingCart.sort();
shoppingCart.reverse();

// Prints the list of items in your shopping cart to the console as a comma separated string.
console.log(`Shopping Cart: ${shoppingCart}`);
