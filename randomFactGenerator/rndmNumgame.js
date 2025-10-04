let max = prompt("enter max limit.");
const num = Math.floor((Math.random()) * max) + 1;
let guess=prompt("enter your guess..")

while (true) {
    if (guess == "quit") {
        console.log("user quit! the number was", num);
        break;
    }
    if(guess==num) {
        console.log("your guess is right!the number is", num);
        break;
    } else if (guess < num) {
       guess=prompt("too low ..guess again");
    } else {
        guess=prompt("too high ..guess again");
    }


}