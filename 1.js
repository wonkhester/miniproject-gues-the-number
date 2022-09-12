var ps = require("prompt-sync");
var prompt = ps();

var rePlay = 'yes';
var winStreak = 0;
while ((rePlay == 'yes') || (rePlay == 'Yes')) {

    let randomNumber = parseInt(Math.random() * 100) + 1;
    console.log(randomNumber)

    var minNumber = 1;
    var maxNumber = 100;
    var counter = 0;

    while (true){
        if (counter == 10) {
            console.log('You are out of lives correct number was ' + randomNumber);
            winStreak = 0;
            break;
        }
        let guessTheNumber = parseInt(prompt('Guess a number between ' + minNumber + '-' + maxNumber +": "));

        if ((guessTheNumber > maxNumber) || (guessTheNumber < minNumber)){
            console.log('Breh');
            winStreak = 0;
            break;
        }

        if (randomNumber < guessTheNumber) {
            console.log('The number is smaler');
            maxNumber = (-1) + guessTheNumber 
        }
        else if (randomNumber > guessTheNumber) {
            console.log('The number is larger');
            minNumber = 1 + guessTheNumber
        }
        else if (randomNumber == guessTheNumber) {
            console.log('Victory!');
            winStreak = winStreak + 1;
            break;
        }
        else {
            console.log('error');
            winStreak = 0;
            break;
        }
        counter = counter + 1;
    }
    console.log(winStreak)
    var rePlay = prompt('play again?: ')
    
}