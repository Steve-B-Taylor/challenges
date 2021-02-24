// YOUR CODE HERE
function printPuzzle(word, guesses = []) {
  let parts = word.split('')
  let letterArray = []

  parts.forEach((part) => {
    letterArray.push('_')
  })

  guesses.forEach((guess) => {
    // console.log(guess)
    parts.forEach((part, index) => {
      // console.log(part)
      if (guess === part) {
        letterArray.splice(index, 1, guess)
      }
    })
  })

  console.log(letterArray)

}

function main() {
  printPuzzle('ChiaPet', ['h', 'a', 't'])
  printPuzzle('hyperdrive', ['e', 'r', 'h'])
  printPuzzle('supernova', ['s', 'e', 'a'])
  printPuzzle('protomolecule', ['p', 'o', 't'])
}

main()