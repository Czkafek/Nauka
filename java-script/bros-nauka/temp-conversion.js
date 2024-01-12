const value = document.getElementById("myInput");
const toFahren = document.getElementById("toFahren");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let tmp;

function convert() {
    if ( toFahren.checked ) {
        tmp = Number(value.value);
        tmp = tmp * 9 / 5 + 32;
        result.textContent = tmp.toFixed(1) + "°F";
    }
    else if ( toCelsius.checked ) {
        tmp = Number(value.value);
        tmp = (tmp - 32) * 5 / 9;
        result.textContent = tmp.toFixed(1) + "°C";
    }
    else { 
        result.textContent = "You must choose one of the options!"
    }
}