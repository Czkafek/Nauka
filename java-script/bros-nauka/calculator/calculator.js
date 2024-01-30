
const display = document.getElementById('display');

function appendOnDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    console.log('lol');
    display.value = "";
}