/*  MY CODE

        let counter = 0;

        document.getElementById("decrease").onclick = function() {
            counter--;
            document.getElementById("myH1").textContent = counter;
        }
        document.getElementById("reset").onclick = function() {
            counter = 0;
            document.getElementById("myH1").textContent = counter;
        }
        document.getElementById("increase").onclick = function() {
            counter++;
            document.getElementById("myH1").textContent = counter;
        }
*/

/* BRO`S CODE */ 
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countH1 = document.getElementById("myH1");

let counter = 0;

decrease.onclick = function() {
    counter--;
    countH1.textContent = counter;
}
reset.onclick = function() {
    counter = 0;
    countH1.textContent = counter;
}
increase.onclick = function() {
    counter++;
    countH1.textContent = counter;
}

