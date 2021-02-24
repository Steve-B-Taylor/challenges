
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min).toFixed(2);
}

let cost = getRandomNum(1, 100);
let itemName = prompt('What would you like to order?');
let itemQuantity = prompt('How many ' + itemName + '\'s would you like to order?');
let totalCost = cost * itemQuantity;
let deliveryTime = getRandomNum(3, 12)
console.log('You would like to order ' + itemQuantity + ' ' + itemName + '(s) costing ' + `$${cost}` + ' each. Your total cost is ' + `$${totalCost.toFixed(2)} and it will be delivered in ${deliveryTime} days.`);