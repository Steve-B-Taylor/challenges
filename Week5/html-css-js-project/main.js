// your JavaScript here

let getRandom = (number) => {
  return Math.floor(Math.random() * number);
};

quotes = [
  ["You’re killin’ me, Smalls!", 'Hamilton "Ham" Porter'],
  ["You mix your Wheaties with your mama’s toe jam!", 'Hamilton "Ham" Porter'],
  [
    "This pop isn’t workin’, Benny! I’m bakin’ like a toasted cheese-it! It’s so hot here!",
    'Hamilton "Ham" Porter',
  ],
  ["Man, base up you blockheads!", 'Benny "The Jet" Rodriguez'],
  [
    "What are you laughing at Yeah-Yeah? You run like a duck.",
    'Benny "The Jet" Rodriguez',
  ],
  [
    "Just stand out there and stick your glove out in the air. I’ll take care of it.",
    'Benny "The Jet" Rodriguez',
  ],
];

let newQuote = () => {
  let quote = getRandom(quotes.length);
  let quoteText = document.getElementById("quote-text");
  quoteText.innerHTML = `&ldquo;${quotes[quote][0]}&rdquo;`;
  let quotePerson = document.getElementById("quote-person");
  quotePerson.innerHTML = `&ndash;&nbsp;${quotes[quote][1]}`;
};

let squishIt = (sectionID) => {
  let cBtn = document.querySelector(`#squish-${sectionID.id}`);
  let sqSection = document.querySelector(`#${sectionID.id}`);
  // console.log(cBtn);
  // console.log(sqSection);
  sqSection.classList.add("expand");
  cBtn.addEventListener("click", () => {
    if (sqSection.classList.contains("expand")) {
      cBtn.innerHTML = "Show";
      sqSection.style.display = "none";
      sqSection.classList.replace("expand", "collapse");
    } else {
      cBtn.innerHTML = "Hide";
      sqSection.style.display = "block";
      sqSection.classList.replace("collapse", "expand");
    }
    // console.log(sqSection.classList);
  });
  // console.log(`squish-${sectionID.id}`);
  // let cBtn = document.getElementById(`${sectionID.id}`);
};

let sections = [summary, synopsis, characters, soundtrack, crew];

sections.forEach((section) => {
  // console.log(section);
  squishIt(section);
});
