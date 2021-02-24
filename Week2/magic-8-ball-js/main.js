const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Can't predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log('Array length: ' + responses.length + ' (this should be 20)')

// Ask the user what their question is, and store it as a variable called `question`
const question = prompt('What is your question?')

// Output a random response to the user's question
let randomResponse = Math.floor(Math.random() * responses.length - 1);
let response = responses[randomResponse]

// Output the number of responses that include the word "yes"
// Output the number of responses that include the words "no" or "not"
let yesCount=0
let noCount=0
responses.forEach((response) => {
  if (response.split(' ').includes("yes")) yesCount++;
  if (response.split(' ').includes("no") || response.split(' ').includes("not")) noCount++;
});

console.log('Number of responses with "yes": ' + yesCount)
console.log('Number of responses with "no" or "not": ' + noCount)

// Output the alphabetized list of responses
console.log(responses.sort())

// Output the first and last responses from the alphabetized list
console.log('First item: ' + responses[0])
console.log('Last item: ' + responses[responses.length - 1])

// Delete two of the negative responses
let delItems = 0;
for (i = 0; i < responses.length; i++) {
  if (delItems === 2) break;
  const responseItems = responses[i].split(" ");
  if (responseItems.includes("no") || responseItems.includes("not")) {
    responses.splice(i--, 1);
    delItems++;
  }
}
console.log('Array length: ' + responses.length + ' (this should be 18)')

// Reassign 'Ask again later' to the beginning of the array
let pos = responses.indexOf("Ask again later")

responses.splice(pos, 1) // this is how to remove an item
responses.unshift("Ask again later") // add to the front

// Add 1 response of your choosing to the current list
responses.push("No, no, no, a thousand times no... go boil and egg")

// Concat an **array** of 3 additional responses to the current list
newResponses = [
  "Give me a 'Y.' Give me an 'E.' Give me an 'S.' Give me a 'Y-E-S'",
  "Is the mitochondria the powerhouse of the cell",
  "I would love to say yes, but I actually wouldn't love to say yes"
]
let allResponses = responses.concat(newResponses)

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log('Array length: ' + allResponses.length + ' (this should be 22)')
