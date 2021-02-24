// generate a random integer between 10 and 60
let generateRandomRolltime = () => {
  return Math.floor(Math.random() * (60 - 10 + 1) + 10)
}

let rawDataArray = [
  {
    cheeseName: 'Red Leicester',
    cheeseDeliciousness: 9,
    contestantName: 'John C',
    contestantHunger: 8
  },
  {
    cheeseName: 'Tilsit',
    cheeseDeliciousness: 3,
    contestantName: 'Michael P',
    contestantHunger: 10
  },
  {
    cheeseName: 'Caerphilly',
    cheeseDeliciousness: 5,
    contestantName: 'Eric I',
    contestantHunger: 2
  },
  {
    cheeseName: 'Bel Paese',
    cheeseDeliciousness: 4,
    contestantName: 'Graham C',
    contestantHunger: 4
  },
  {
    cheeseName: 'Red Windsor',
    cheeseDeliciousness: 9,
    contestantName: 'Terry G',
    contestantHunger: 6
  },
  {
    cheeseName: 'Stilton',
    cheeseDeliciousness: 7,
    contestantName: 'Terry J',
    contestantHunger: 1
  },
  {
    cheeseName: 'Gruyere',
    cheeseDeliciousness: 2,
    contestantName: 'Carol C',
    contestantHunger: 6
  }
]

const registerContestants = (data) => {
  let contestantsMap = data.map((rawData) => {
    let processedArray = { 
      name: rawData.contestantName,
      hunger: rawData.contestantHunger,
      cheese: {
        name: rawData.cheeseName,
        deliciousness: rawData.cheeseDeliciousness
      },
      disqualified: false,
      results: []
    }
    return processedArray
  })
  return contestantsMap
}

let checkForCheeseEating = (contestant) => {
  let eatIt = (contestant.hunger + contestant.cheese.deliciousness) / 2
  if (eatIt >= 7) contestant.disqualified = true
}

let rollDatCheese = (contestant) => {
  checkForCheeseEating(contestant)
  if (!contestant.disqualified) {
    contestant.results.push(generateRandomRolltime())
  }
}

let reportIndividualResults = (contestant) => {
  partOne = `\nContestant ${contestant.name} entered this competition with a lovely ${contestant.cheese.name} cheese.`
  if (!contestant.disqualified) {
    partTwo = ` By meeting the criteria they were able to compete with resulting scores of ${contestant.results}.`
  } else {
    partTwo = ` Unfortunately their rumbly tummy got the better of them and they gobbled up their wheel 'o ${contestant.cheese.name}!`
  }
  fullMsg = partOne + partTwo
  return fullMsg

}

function main(){
  console.log('Greetings and welcome to this years\' epic Bunker Hill Cheese Rolling Championships (brought to you by ACME bioPetro(TM) Food Products!')
  let contestants = registerContestants(rawDataArray)
  contestants.forEach(contestant => {
    for (i=0; i<3; i++) {
      rollDatCheese(contestant)
    }
  })
  contestants.forEach(contestant => {
    contestant.results.forEach(roll => {
    })
    console.log(reportIndividualResults(contestant))
  })
}

main()