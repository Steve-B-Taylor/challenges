// YOUR CODE GOES HERE
// Second submit going for exceeding expectation points
function rpsGuess() {
  let rGuess = Math.floor(Math.random() * 3 + 1);
  if (rGuess === 1) {
    return 'rock'
  } else if (rGuess === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function playerGuess() {
  do {
    pGuess = prompt("Choose 'r' for Rock, 'p' for Paper, or 's' for Scissors")
    if (pGuess === null) {
      pGuess = ''
    } else {
      pGuess = pGuess.toLowerCase().trim()
    }
  } while (!(pGuess === 'r' || pGuess === 'p' || pGuess === 's'))
  if (pGuess === 'r') {
    return 'rock'
  } else if (pGuess === 'p') {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function main() {
  let playerScore = 0
  let computerScore = 0
  let tieScore = 0
  console.log('Welcome to Rock, Paper, Scissors... to the DEATH!')
  console.log('... um, not really.  Just a best of 3.')
  do {
    playerChoice = playerGuess()
    compGuess = rpsGuess()
    console.log(`You chose ${playerChoice} and the computer chose ${compGuess}`)
    if (playerChoice === compGuess) {
      console.log('Oh goody, it\'s a tie')
      tieScore++
    } else if ((playerChoice === 'rock' && compGuess === 'scissors') ||
      (playerChoice === 'paper' && compGuess === 'rock') || 
      (playerChoice === 'scissors' && compGuess === 'paper')) {
        console.log('You win!')
        playerScore++
      } else {
        console.log('The computer wins')
        computerScore++
      }
    console.log(`The score is: You: ${playerScore} Computer: ${computerScore} Ties: ${tieScore}\n`)
  } while (!((playerScore > 1) || (computerScore > 1)))
  console.log('\nRecalling the details of that gritty challenge:')
  console.log(`You won ${playerScore}, lost ${computerScore}, and tied ${tieScore}`)
  console.log(`The computer won ${computerScore}, lost ${playerScore}, and tied ${tieScore}`)
}

main()