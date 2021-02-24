let supplies = [
  "space helmet", 
  "canister of oxygen", 
  "water recycler", 
  "big red button", 
  "freeze dried ice cream", 
  "tang drink mix"
]

/* 1.)  Using a `forEach` loop, write a function called `supplyCheck` 
that takes in an array of supplies as an argument, and logs each item 
to your console. It should match the message of 
"SUPPLY ITEM is logged and accounted for." */

supplies.forEach((supply) => {
  console.log(`${supply.toUpperCase()} is logged and accounted for.`)
})

/* 2.) Create a function named stowSupplies that takes in our array 
of supplies, and returns item name and its index number in a 
formatted string. */

function stowSupplies(element, index, array) {
  console.log(element + ' is in locker ' + index)
}

supplies.forEach(stowSupplies)


/* 3.) Create a function named addAlphabetically that takes in our 
array of supplies and a new supply item and returns an array of 
supplies with that new item, sorted alphabetically. */

function addAlphabetically(item, arr) {
  arr.push(item)
  arr.sort()
}

addAlphabetically("comfy robe", supplies)
supplies.forEach((supply) => {
  console.log(supply)
}) 

/* 4.) Create a function named stockCheck that takes in an inventory 
checklist array, and an array of supplies, and returns an array of items 
that are missing from the checklist. */
let inventoryChecklist = [
  "big red button", 
  "canister of oxygen", 
  "freeze dried ice cream", 
  "jetpack", 
  "tang drink mix", 
  "space helmet", 
  "space brussels sprouts", 
  "water recycler", 
  "welding torch"
]

const missingItems = inventoryChecklist.filter(function(item) {
  return supplies.indexOf(item) === -1 
})

/* 5.) Create a function named addMissingSupplies that takes in 
an array of supplies, and an array of missing supplies, 
and returns a new array with all of the items combined! 
Use your stockCheck method to help you with this. */

const addMissingSupplies = supplies.concat(missingItems)
console.log(addMissingSupplies)
