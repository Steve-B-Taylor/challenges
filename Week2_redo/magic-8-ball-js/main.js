let responses = [
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
  "Very doubtful",
];
// your code, here

function getRand() {
  return Math.floor(Math.random() * responses.length);
}
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length);
// Ask the user what their question is, and store it as a variable called `question`
let question = prompt("What do you want to know?");
// Output a random response to the user's question
console.log(`${responses[getRand()]}`);
// Output the number of responses that include the word "yes"
function filterArray(arr, term) {
  return arr.filter(
    (src) => src.toLowerCase().indexOf(term.toLowerCase()) !== -1
  );
}

console.log(`Yes terms: ${filterArray(responses, "yes")}\n`);
// Output the number of responses that include the words "no" or "not"
let re = new RegExp("/\bno\b" || "\bnot\b" / g);

responses.forEach((srch) => {
  console.log(`No or Not: ${re.test(srch)}`);
});

// Output the alphabetized list of responses

// Output the first and last responses from the alphabetized list

// Delete two of the negative responses

// Reassign 'Ask again later' to the beginning of the array

// Add 1 response of your choosing to the current list

// Concat an **array** of 3 additional responses to the current list

// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
