var ps = require("prompt-sync");
var prompt = ps();

let randomNumber = parseInt(Math. random(1) * 100);
console.log(randomNumber)


let gessTheNumber = prompt("Gess a number between 1-100: ");

if (randomNumber == gessTheNumber) {
    console.log('Victory!')
}
else if (randomNumber != gessTheNumber) {
    console.log('try again')
}
