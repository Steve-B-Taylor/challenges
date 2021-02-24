allSeeds = [
  "arugula",
  "kale",
  "romaine",
  "iceberg",
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion",
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "acorn squash",
  "ugly tomato",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

fruits = [
  "strawberry",
  "raspberry",
  "blackberry",
  "blueberry",
  "roma tomato",
  "ugly tomato",
  "acorn squash",
  "cherry tomato",
  "butternut squash",
  "jalapeno pepper",
  "cayenne pepper",
  "banana pepper",
  "poblano pepper"
]

vegetables = [
  "beet",
  "potato",
  "carrot",
  "garlic",
  "onion"
]

leafyGreens = [
  "arugula",
  "kale",
  "romaine",
  "iceberg"
]

myGarden = []
// YOUR CODE GOES HERE
// console.log(allSeeds)

allSeeds.forEach((seeds) => {
  if (seeds.split(' ').includes("tomato") >= 1) myGarden.push(seeds)
  if (seeds.includes("berry") >= 1) myGarden.push(seeds)
  if ((seeds.split(' ').includes("pepper") >= 1) && 
     (!(seeds.split(' ').includes("cayenne") >= 1))) 
     myGarden.push(seeds)
});

allSeeds.sort();
// console.log(allSeeds)
// walk through myGarden and remove any items from allSeeds
myGarden.forEach((items) => {
  if (allSeeds.includes(items)) 
    allSeeds.splice(allSeeds.indexOf(items), 1)
});

const traitorVeg = [
  "tomato",
  "squash",
  "pepper"
]

const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

traitorVeg.forEach((veg) => {
  modifyList = filterItems(fruits, veg)
  modifyList.forEach((items) => {
    let pos = fruits.indexOf(items)
    vegetables.push(items)
    fruits.splice(pos, 1)
  })
})

const fullArrayList = [
  allSeeds,
  fruits,
  vegetables,
  leafyGreens,
  myGarden,
  traitorVeg
]

fullArrayList.forEach((lepper) => {
  modifyList = filterItems(lepper, 'iceberg')
  modifyList.forEach((items) => {
    let pos = lepper.indexOf(items)
    lepper.splice(pos, 1)
  })
})

const theSquashes = filterItems(allSeeds, 'squash')
myGarden.push(theSquashes[0])

console.log("Here's the full list of items we are planting:")
myGarden.forEach((item) => {
  console.log(item)
})
console.log('---------------')
console.log(`In all, there will be ${myGarden.length} items to plant`)