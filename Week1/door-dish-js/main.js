let formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD"
});

const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0
let driverTipMsg = ' Your'

alert('Hello hungry friend! Welcome to Doordish, where the pizza comes to you!')
let orderType = prompt('Is your order takeout or delivery?')
if (orderType == 'delivery') {
    driverTip = parseFloat((prompt('How much do you want to tip the driver?')))
    driverTipMsg = ` With a ${formatter.format(driverTip)} tip and delivery fee, your`
}
let numPizzas = parseInt(prompt('How many pizzas would you like?'))
let extras = prompt('Would you like extra cheese?').toLowerCase()
if (extras == 'yes') {
    extrasMsg = ""
    alert(`That will cost you an additional ${formatter.format((numPizzas * extraCheese))}.`)
} else {
    extrasMsg = "no "
}
if (orderType == 'delivery') {
    orderTypeMsg = 'deliverd to your'
} else {
    orderTypeMsg = 'picked up at our'
}

let totalCost = ((pizza * numPizzas ) + (extraCheese * numPizzas) + driverTip + deliveryFee)

let summary = `We are preparing your ${numPizzas}\
 pizzas with ${extrasMsg}extra cheese to be ${orderTypeMsg}\
 door.${driverTipMsg} total comes to ${formatter.format(totalCost)}.`
alert(summary)
