// your code, here
let stormMultiplier = 1;
let bread = 1.99;
let milk = 3.89;
let eggs = 2.29;
stormMultiplier = 3;
let totalCost = stormMultiplier * (bread + milk + eggs);
totalCost = totalCost.toFixed(2);
console.log(`Your total cost is: $${totalCost}`);