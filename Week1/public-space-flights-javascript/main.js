// Your code here!
const dehydratedBanana = 1.27
const tofuCake = 4.17
const cheeseSpread = 3.79
const dehydratedIceCreamSandwich = 0.75

//Greet the customer.
console.log(`Hello brave customer! Welcome to our exclusive space flight tours.`)


//Ask how many adult tickets they would like.
let adultTix = prompt('How many ADULT tickets would you like to purchase?')

//Accept the user's answer and save it as a variable.


//Ask how many child tickets they would like.
let childTix = prompt('How many CHILD tickets would you like to purchase?')


//Accept the user's answer and save it as a variable.


//Print a sentence returning the number of adult and child tickets the user has asked for.
console.log('Here are your ' + adultTix + ' adult tickets and ' + childTix + ' child tickets!')

let q1 = (2 * tofuCake) + (2 * dehydratedIceCreamSandwich)
let q2 = (8 * cheeseSpread) + (1 * dehydratedBanana)
let q3 = (3 * dehydratedBanana) + (3 * tofuCake) + (3 * cheeseSpread) + (3 * dehydratedIceCreamSandwich)
console.log(`Two tofu cakes and two dehydrated ice cream sandwiches cost $${q1}`)
console.log(`Eight cheese spreads and a dehydrated banana cost $${q2}`)
console.log(`Three of each item on the menu cost $${q3}`)