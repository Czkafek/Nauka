
const stopWatch = document.getElementById("stopWatch");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunnig = false;

function start(){
    
    if(!isRunnig) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunnig = true;
    }
}

function stop() {
    if(isRunnig) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunnig  = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunnig = false;
    stopWatch.textContent = "00:00:00:00";
    console.log("reset");
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    let hours = Math.floor(elapsedTime / (1000 *60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    miliseconds = String(miliseconds).padStart(2, 0);

    stopWatch.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}
