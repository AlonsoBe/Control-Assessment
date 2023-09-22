const coinflip = prompt("heads or tails?") 
let userChoice = (coinflip.result)
let computerChoice = "tails"

var randomNumber = Math.floor(Math.round(Math.random())) 
randomNumber = Math.round(Math.random());
if (randomNumber === 0) {
    computerChoice = "heads";
} else  computerChoice = "tails"

if(coinflip === computerChoice){
alert ("You guessed right! The coin flip landed on " + computerChoice)
    } else 
    alert ("Sorry, the coin flip landed on " + computerChoice);

     if (userChoice === computerChoice){
    alert("You guessed right! The coin flip landed on heads"); 
    }
  if (randomNumber === 1) {
        computerChoice = "tails";
    if (userChoice === computerChoice){
        alert("You guessed right! The coin flip landed on tails");


    } 
    else {alert("You guessed right! The coin flip landed on heads");}
    
} 

let = prompt("What year were you born?");
const birthYear = 1995;

if ((2023-birthYear) > 21) {
    alert("You are old enough to drink in the US");
} 
