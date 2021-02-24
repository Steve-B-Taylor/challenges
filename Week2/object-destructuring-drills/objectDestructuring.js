// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// OBJECT DESTRUCTURING
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. Create an object, `veggieFaves`, with keys of `favoriteRootVeggies`, `favoriteLeafyVeggies`, and
// `favoriteVeggiesThatAreActuallyFruit`, each of which should have a value of an empty array.
// 2. Fill in your 3 arrays with your favorite of each category (or leave them as an empty array --
// there's no accounting for taste).
// 3. Destructure these 3 variables from your `veggieFaves` object, and then uncomment these
// lines to print your list to the console.

// your code, here
const veggieFaves = {
  favoriteRootVeggies: ['potato', 'yam', 'beets'],
  favoriteLeafyVeggies: ['spinach', 'kale'],
  favoriteVeggiesThatAreActuallyFruit: ['avocado', 'peppers']
  }

let {favoriteRootVeggies, favoriteLeafyVeggies, favoriteVeggiesThatAreActuallyFruit} = veggieFaves

// uncomment the lines below to check your work!
console.log("I love...")

favoriteRootVeggies.forEach(veggie => {
  console.log(veggie)
})

console.log("and...")

favoriteLeafyVeggies.forEach(veggie => {
  console.log(veggie)
})

console.log("and especially...")

favoriteVeggiesThatAreActuallyFruit.forEach(veggie => {
  console.log(veggie)
})
