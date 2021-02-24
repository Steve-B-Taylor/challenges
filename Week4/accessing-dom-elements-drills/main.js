// Your code here
let eduLiz = document.getElementById("i-love-educated-lizards");
let recipeIdea = document.getElementsByClassName("recipe-idea");
let h2Lyrics = document.querySelectorAll("h2.lyrics");
let prplJag = document.getElementById("purple-jaguar-eye");
let prplJagParent = prplJag.parentElement;
let prplJagChildren = prplJag.children;
let prplJagChild6 = prplJagChildren[5];
let misspelledDeserts = document.getElementsByClassName(
  "recipe-idea intentional-misspelling-of-desert"
);
let numLimerickRoll = document.getElementsByClassName("limerickroll");

console.log(eduLiz);
console.log(recipeIdea.item(0));
console.log(recipeIdea[1]);
console.log(h2Lyrics);
console.log(prplJagParent);
console.log(prplJagChildren);
console.log(prplJagChild6);
console.log(misspelledDeserts);
console.log(numLimerickRoll[0].children.length);
