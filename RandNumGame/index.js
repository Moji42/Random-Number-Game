const min = 1;
const max = 100;
const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

let currGuess;
let active = true;
let attempts = 0;

// Function to terminate the game 
function endGame() {
    active = false;
}

while (active) {
    currGuess = window.prompt("Please select a number between " + min + " and " + max);
    currGuess = Number(currGuess);

    if (isNaN(currGuess)) {
        window.alert("Please enter a valid number");
    } else if (currGuess < min || currGuess > max) {
        window.alert("Please enter a valid guess");
    } else {
        attempts++;

        if (currGuess < randNum) {
            window.alert("Current guess is too Low!");
        } else if (currGuess > randNum) {
            window.alert("Current guess is too High!");
        } else {
            window.alert("Congrats! The number was " + randNum + ". It took " + attempts + " attempts!");
            active = false;
        }
    }
}
