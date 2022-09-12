var ps = require("prompt-sync");
var prompt = ps();

console.log("Game info: \n There will be a random number between 1 and 100 \n you are going to guess what number it is, \n you will have 10 lives and every time you fail \n you will lose one and be told if the number is higher or lower.");
var rePlay = prompt('Would you like to play a game?: ')
var winStreak = 0;
while ((rePlay == 'yes') || (rePlay == 'Yes')) {

    let randomNumber = parseInt(Math.random() * 100) + 1;
    console.log(randomNumber)

    var minNumber = 1;
    var maxNumber = 100;
    var counter = 0;

    while (true){
        var hp = 9 - counter;

        if (counter == 10) {
            console.log('You are out of lives, the correct number was ' + randomNumber);
            winStreak = 0;
            break;
        }

        var guessTheNumber = parseInt(prompt('Guess a number between ' + minNumber + '-' + maxNumber +": "));

        if ((guessTheNumber > maxNumber) || (guessTheNumber < minNumber)){
            console.log('Breh');
            winStreak = 0;
            break;
        }

        if (randomNumber < guessTheNumber) {
            console.log('Your HP is now = ', hp)
            console.log('The number is smaller');
            maxNumber = (-1) + guessTheNumber 
        }
        else if (randomNumber > guessTheNumber) {
            console.log('Your HP is now = ', hp)
            console.log('The number is larger');
            minNumber = 1 + guessTheNumber
        }
        else if (randomNumber == guessTheNumber) {
            console.log('Victory!');
            winStreak = winStreak + 1;
            break;
        }
        else {
            console.log('Error! What did you do?')
            winStreak = 0;
            break;
        }
        counter = counter + 1;
    }
    console.log(winStreak)
    var rePlay = prompt('play again?: ')
    
}