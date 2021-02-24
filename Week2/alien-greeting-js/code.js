//your code here

function rando() {
  let rand=Math.floor(Math.random() * 5 + 1)
  if (rand === 1) {
    return 'Hi '
  } else if (rand === 2) {
    return 'Yo '
  } else if (rand === 3) {
    return 'Hey '
  } else if (rand === 4) {
  return 'Howdy '
  } else {
    return 'Wasssssuuuuuuuuuupppp '
  }
}

function greet(name, language) {
  if (language === "English") {
    return 'Hi ' + name + '!'
  } else if (language === "Spanish") {
    return 'Hola ' + name + '!'
  } else if (language === "Italian") {
    return 'Ciao ' + name + '!'
  } else if (language === "Irken") {
    return 'DOOM de doom ' + name + '!'
  } else {
    return rando() + name + '!'
  }
}

console.log(greet('ZIM'))
console.log(greet('Zod', "English"))
console.log(greet('Ford', "Spanish"))
console.log(greet('Mork', "Italian"))
console.log(greet('Alf', "Irken"))