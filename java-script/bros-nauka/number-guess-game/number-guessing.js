const random_number = Math.floor(Math.random()*99)+1;
console.log(random_number);
const answer = document.getElementById("answer");
let guess = 0;
let running = true;


while(running) {
    guess = window.prompt("Your guess is:");
    if(guess > random_number) {
        window.alert("Too big");
    }
    else if(guess < random_number) {
        window.alert("Too small");
    }
    else {
        answer.textContent = "!!! YOU WIN !!!";
        window.alert("!!!YOU WIN!!!");
        running = false;
    }
}
