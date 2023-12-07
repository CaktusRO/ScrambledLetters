let accuracy = document.querySelector("#accuracy")
let mixed = document.querySelector("#mixed")
let input = document.querySelector("#input")
let submit = document.querySelector("#submit")
let wins = document.querySelector("#wins")
let misses = document.querySelector("#misses")
let random;
let possibleWords = ["truck", "house", "bottle", "pack", "phone", "water", "candy", "book", "city", "lamp", "floor", "sign", "hand", "nose", "tear", "sugar", "band", "music", "paper", "cable", "onion", "wood", "door", "bath", "game"]
let correctWord;
let usedWords = [];

function randomWord() {
  while (true) {
    let random = Math.floor(Math.random() * possibleWords.length)
    if (usedWords.includes(possibleWords[random]) == false) {
      
    usedWords.splice(0,0, possibleWords[random])
    return possibleWords[random];
  }
} }

let theWord = randomWord();

function shuffleWord() {
  let arrayedWord = theWord.split("");
  let newArray = [];
  for (a = 0; a < arrayedWord.length; a++) {
    newArray.splice(0,0,0)
  }
  for (i = 0; i < arrayedWord.length; i++) {
    while (true) {
    let random = Math.floor(Math.random() * arrayedWord.length)
      if (newArray[random] == 0) {
        newArray.splice(random, 1, arrayedWord[i])
        break
      }
  }
  }
  correctWord = theWord;
  return newArray.join("").toUpperCase();
  }

mixed.innerHTML = shuffleWord(theWord);

submit.addEventListener("click", function() {
  if (usedWords.length !== possibleWords.length) {
    
  
  if (input.value.toUpperCase() === correctWord.toUpperCase()) {
    wins.innerHTML = Number(wins.innerHTML) + 1
    correctWord = undefined;
    theWord = randomWord();
    mixed.innerHTML = shuffleWord(theWord)
  } else {
    misses.innerHTML = Number(misses.innerHTML) + 1
    correctWord = undefined;
    theWord = randomWord();
    mixed.innerHTML = shuffleWord(theWord)
   } } else 
    if (usedWords.length == possibleWords.length) {
      mixed.innerHTML = "Game completed!"
      if (input.value.toUpperCase() === correctWord.toUpperCase()) {
        wins.innerHTML = Number(wins.innerHTML) + 1
        correctWord = undefined;
      } else {
        misses.innerHTML = Number(misses.innerHTML) + 1
        correctWord = undefined;
    }
   }
  } 
)

