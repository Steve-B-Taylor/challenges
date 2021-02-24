// YOUR CODE, HERE

function greaterThanZero(num) {
  if (num >= 0) {
    return `${num} is greater than or equal to 0`;
  } else {
    return `${num} is less than 0`;
  }
}

function byFive(num) {
  if (num % 5 === 0) {
    return `${num} is divisible by 5`;
  } else {
    return `${num} is not divisible by 5`;
  }
}

function nameSwap(firstName, lastName) {
  let swapName = lastName + ", " + firstName;
  return swapName;
}

function addItUp(num) {
  totalNum = 0;
  for (i = 1; i <= num; i++) {
    totalNum += i;
  }
  return totalNum;
}

function findIt(letter, searchString) {
  let parts = searchString.split("");
  let counts = 0;
  parts.forEach((part) => {
    if (part === letter) counts++;
  });
  return counts;
}

// another way
let letterCount = (char, word) => {
  let wordArray = word.toLowerCase().split("");
  let hits = wordArray.filter((letter) => {
    return letter === char;
  });
  return hits.length;
};

function compareNumbers(a, b) {
  return a - b;
}

function sorted(numArray) {
  return numArray.sort(compareNumbers);
}

function repeater(num, name) {
  for (i = 0; i < num; i++) {
    console.log(name);
  }
}

let newRepeater = (num, name) => {
  let numName = "";
  for (i = 0; i < num; i++) {
    numName += `${name}\n`;
  }
  return numName;
};

let anotherNewRepeater = (num, word) => {
  let numName = `${word}\n`;
  return numName.repeat(num);
};

function convertIt(mins) {
  return mins * 60 + " seconds";
}

function firstLast(list) {
  retArray = [];
  retArray.push(list[0]);
  retArray.push(list[list.length - 1]);
  return retArray;
}

function convertLetter(word) {
  // Accepts a word and converts each letter to
  // its number place in the alphabet then returns
  // the value.
  refArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  retArray = [];
  workArray = word.split("");
  workArray.forEach((letter, index) => {
    retArray.push(refArray.indexOf(letter));
  });
  return `${word} converted: ${retArray}`;
}

function main() {
  console.log(greaterThanZero(-5));
  console.log(greaterThanZero(0));
  console.log(greaterThanZero(5));
  console.log(byFive(5));
  console.log(byFive(40));
  console.log(byFive(17));
  console.log(nameSwap("George", "Washington"));
  console.log(nameSwap("Ford", "Prefect"));
  console.log(nameSwap("Forghorn", "Leghorn"));
  console.log(addItUp(4));
  console.log(addItUp(3));
  console.log(addItUp(42));
  console.log(findIt("a", "Islay Mae")); // => 2
  console.log(findIt("x", "Geoffrey")); // => 0
  console.log(findIt("a", "I aim to misbehave")); // => 2
  console.log(sorted([2, 13, 7, 43, 27]));
  console.log(repeater(3, "Mae"));

  console.log(newRepeater(5, "R2D2"));
  console.log(anotherNewRepeater(3, "Boba"));

  console.log(convertIt(3));
  console.log(firstLast(["duck", "duck", "quail", "goose"])); // => ["duck", "goose"]
  console.log(firstLast([2, 4, 6, 8, 10])); // => [2, 10]
  console.log(convertLetter("snowgoons")); // => 18,13,14,22,6,14,14,13,18
  console.log(convertLetter("herkimer")); // => 7,4,17,10,8,12,4,17
}

main();
