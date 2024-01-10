/* PODSTAWY  
    
    console.log(`Hello World`);
    console.log(`I love pizza`);
    window.alert(`This is an alert okay?`);
    window.alert(`I love pizza`);
    

    //This is a comment

    document.getElementById('H1').textContent = `Hello World`;
    document.getElementById(`Par`).textContent = `I love pizza!`
*/


/*  VARIABLES
    let y; //definiujesz zmienną y
    let x = 123; //definiujesz zmienną x i przypisujesz jej wartość

    let age = 15
    let price = 10.99
    let gpa = 2.1

    console.log(price)
    console.log(`You are ${age} years old`);
    console.log(`The price is ${price}`)
    console.log(typeof gpa) //sprawdzamy, a następnie wypisujemy w konsoli typ zmiennej gpa

    let firstName = `Wiktor`

    console.log(typeof firstName)
    console.log(`My first name is ${firstName}`)

    let online = true; //it`s a boolean. It is always true or false
    let forSale = false;

    console.log(`Wiktor is online: ${online}`)
    console.log(`Is this car for sale: ${forSale}`)

    let fullName = "Wiktor";
    let age = 15;
    let student = true;

    document.getElementById('p1').textContent = `Your name is ${fullName}.`;
    document.getElementById('p2').textContent = `You are ${age} years old.`;
    document.getElementById('p3').textContent = `Are you a student: ${student}.`;
*/

/* ARITHMETIC OPERATORS 

    let students = 31;

    // students **= 2; // ** - podnosi do danej potęgi, tutaj podniosłem zmienną students do potęgi 2
    // let extraStudents = students % 3; // % - daje resztę z dzielenia, modulo

    console.log(students);
*/

/* HOW TO ACCEPT USER INPUT  

    // 1. EASY WAY - window prompt

        let username;

        username = window.prompt(`What's you username?`);

        console.log(username);

    // 2. PROFESSIONAL WAY - HTML textbox

        let username;

        document.getElementById('mySubmit').onclick = function() {
            // wszystko tutaj wydarzy sie tylko jeśli element z danym id zostanie kliknięty
            username = document.getElementById('myText').value;
            console.log(username);
            document.getElementById('myh1').textContent = `Welcome ${username} To The Game`
        }
*/


/* TYPE CONVERSION 

    let age = window.prompt("How old are you?");
    age = Number(age); // konwertuje jaki kolwiek typ dany na typ number (aka int z c++`a)
    age+=1;

    console.log(age, typeof age);
    let x;
    let y;
    let z;
    x = Number(x);
    y = String(y);
    z = Boolean(z);
    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);
*/


/* RANDOM NUMBER 

    let randomNum = Math.random(); // it gives a  random number beetween 0 and 1
    console.log(randomNum);

    let secondRandomNum = Math.floor(Math.random() * 6) +1 ; // tym sposobem zmieniamy zasięg funkcji random z od 0 do 1  na  od 1 do 6, a za pomocą Math.floor zaokrąglamy liczbę
    console.log(secondRandomNum);

    const min = 50;
    const max = 100;
    let thirdRandomNum = Math.floor(Math.random() * (max - min)) + min;
    console.log(thirdRandomNum);


    const losuj = document.getElementById('losuj');
    let min = 10;
    let max = 30;

    losuj.onclick = function() {
        let losowyNumer = Math.floor(Math.random() * (max-min)) + min;
        document.getElementById('losujH1').textContent = losowyNumer;
}
*/

/* CHECKED PROPERTY

    const myCheckBox = document.getElementById('MyCheckBox');
    const Visa = document.getElementById('VisaBtn');
    const MasterCard = document.getElementById('MasterCardBtn');
    const PayPal = document.getElementById('PayPalBtn');
    const submit = document.getElementById('mySubmit');
    const subResult = document.getElementById('subResult');
    const paymentResult = document.getElementById('paymentResult');

    submit.onclick = function() {

        if(myCheckBox.checked) {
            subResult.textContent = `You are a subscriber!`;
        }
        else {
            subResult.textContent = `You are NOT a subscriber!`;
        }

        if(Visa.checked) {
            paymentResult.textContent = 'You are paying with Visa';
        }
        else if(MasterCard.checked) {
            paymentResult.textContent = 'You are paying with MasterCard';
        }
        else if(PayPal.checked) {
            paymentResult.textContent = 'You are paying with PayPal';
        }
        else {
            paymentResult.textContent = 'You are not paying with anything';
        }

    }
*/


/* TERNARY OPERATOR */
// shortcut to if{} and else{} statements
// How to use it:
// condition ? code-if-true : code-if-false
let age = 18;
age>=18 ? "You are an adult" : "You are a minor";

let message = age>=18 ? "You are an adult" : "You are a minor";

console.log(message);