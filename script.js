const coinflip = prompt("heads or tails?") 
let userChoice = (coinflip.result)
let computerChoice = "tails"

var randomNumber = Math.floor(Math.round(Math.random())) 
randomNumber = Math.round(Math.random());
if (randomNumber === 0) {
    computerChoice = "heads";
} else computerChoice = "tails"

if (coinflip === computerChoice) {
alert ("You guessed right! The coin flip landed on " + computerChoice)
    } else {
    alert ("Sorry, the coin flip landed on " + computerChoice);   
} 

const birthYear = prompt("What year you were born?");
const age = 2023 - birthYear
if (age > 21) {
    alert ("You are old enough to drink in the US");
} else if (age == 21) {
    alert ("You are old enough to drink in the US... barely");
} else {
    alert ("Sorry, you are not old enough to drink in the US");
}