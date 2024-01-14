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


/* TERNARY OPERATOR 
    // shortcut to if{} and else{} statements
    // How to use it:
    // condition ? code-if-true : code-if-false
    let age = 18;
    age>=18 ? "You are an adult" : "You are a minor";

    let message = age>=18 ? "You are an adult" : "You are a minor";

    console.log(message);
*/


/* STRING METHODS
    let userName = '  Czkafek';

    console.log(userName.charAt(0)); // .charAt(index)
    console.log(userName.indexOf("k")); // .indexOf("szukany znak")
    console.log(userName.lastIndexOf("k"));
    console.log(userName.length); // długość stringa

    userName = userName.trim(); // deletes white spaces if they occure
    console.log(userName);

    userName = userName.toUpperCase();
*/


/* METHOD CHAIN 

    // No method chainging -> to compare

        let username = window.prompt("Enter you username: ");

        username = username.trim();
        let letter = username.charAt(0);
        letter = letter.toUpperCase();

        let extraLetters = username.slice(1);
        extraLetters = extraLetters.toLowerCase();

        username = letter + extraLetters;

        console.log(username);
    // method chainging

        username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

        console.log(username);
*/


/* FUNCTION 

    function happyBirthday(username, age) {
        console.log("Happy birthday to you!");
        console.log("Happy birthday to you!");
        console.log(`Happy birthday dear ${username}!`);
        console.log("Happy birthday to you!");
        console.log(`You are ${age} years old`);
    }
    happyBirthday("Czkafek", 15);
    happyBirthday("Spongebob", 30);

    function add(x, y) {
        let result = x + y;
        return result;
    }
    let answer = add(2,3);
    console.log(answer);

    function substract(x,y) {
        return x-y;
    }
    let substraction = substract(10, 4);
    console.log(substraction);

    function isEven(number) {
        return number % 2 === 0 ? true : false
    }
    console.log(isEven(10));

    function isEmailValid(email) {
        return email.includes("@") ? true : false
    }
    console.log(isEmailValid("czkafek@gmail.com"));
*/

/* CALLBACK
    //U pass a function as an argument to another function without (), funkcja dostająca argument powinna mieć zmienną, np. callback, a następnie wywołać ją na końcu funkcji
    hello(leave);

    function hello(callback) {
        console.log("hello!");
        callback();
    }

    function leave() {
        console.log("leave");
    }

    function goodbye() {
        console.log("goodbye!");
    }

    sum(displayPage, 1, 2)

    function sum(callback, x, y) {
        let result = x + y;
        callback(result);
    }

    function display(result) {
        console.log(result);
    }

    function displayPage(result) {
        document.getElementById("myH1").textContent = result;
    }
 */

    /*
    setTimeout(function() {
        console.log("hello!");
    }, 2000 ) // Makes this wait 2 seconds
    */

/* forEach() */
let numbers = [1, 2 ,3 ,4, 5];

numbers.forEach(triple);
numbers.forEach(display);

function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element*2;
}

function triple(element, index, array) {
    array[index] = element*3;
}

let fruits = ["apple", "banana", "orange", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}