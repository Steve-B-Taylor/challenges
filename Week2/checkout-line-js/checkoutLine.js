let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
}

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
}

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
}

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
}

let shoppingCart = [eggs, milk, bread, coffee]

// your code, here
// let coffeeItem = shoppingCart[3]
// let milkItem = shoppingCart[1]

let coffeeItem = shoppingCart.find((item) => item.itemName === 'lbs. of coffee')
let milkItem = shoppingCart.find((item) => item.itemName === 'gallon of milk')

console.log('One pound of coffee is $' + coffeeItem.price +'.')
console.log('There are '+ milkItem.quantity + ' gallon(s) of milk in the shopping cart.')

const TAX_RATE = 6.25
let subTotal = 0
shoppingCart.forEach((item) => {
  subTotal += item.price * item.quantity
})
displaySubtotal =(subTotal * (1 + (TAX_RATE / 100)))
console.log('subtotal: $' + subTotal)
console.log(`total: $${displaySubtotal.toFixed(2)}`)