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

/* forEach() 
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
*/


/* MAP METHOD 
    // .map()
    // accepts a callback and applies that function to each element of an array, then return a new array

    const numbers = [1, 2, 3, 4, 5];

    const squares = numbers.map(square);
    const cubes = numbers.map(cube);

    console.log(squares);
    console.log(cubes);

    function square(element) {
        return Math.pow(element, 2);
    }

    function cube(element) {
        return Math.pow(element, 3);
    }

    const students = ["Mike", "Wiktor", "Gocha", "Lotka"];

    const studentsUpper = students.map(toUpperCase);
    const studentsLower = students.map(toLowerCase);

    console.log(studentsUpper);
    console.log(studentsLower);

    function toUpperCase(element) {
        return element.toUpperCase();
    }

    function toLowerCase(element) {
        return element.toLowerCase();
    }


    const dates = ["2024-1-10", "2025-4-20", "2021-9-29"];
    const formatedDates = dates.map(formatDates);

    console.log(formatedDates);

    function formatDates(element) {
        const parts = element.split("-");
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
*/


/* FILTER METHOD 
    // .filter() = creates a new array by filtering out elements

    let numbers = [1, 2, 3, 4, 5, 6, 7];
    let evenNums = numbers.filter(isEven);
    let oddNums = numbers.filter(isOdd);

    console.log(evenNums);
    console.log(oddNums);

    function isEven(element) {
        return element % 2 === 0;
    }

    function isOdd(element) {
        return element % 2 !== 0;
    }

    const ages = [16, 17, 18, 18, 19, 20, 60];
    const adults = ages.filter(isAdult);
    const children = ages.filter(isChild);

    console.log(adults);
    console.log(children);

    function isAdult(element) {
        return element >= 18;
    }

    function isChild(element) {
        return element < 18;
    }


    const words = ["apple", 'orange', 'banana', 'coconut', 'kiwi', 'granate'];
    const short = words.filter(getShort);
    const long = words.filter(getLong);

    console.log(short);
    console.log(long);

    function getShort(element){
        return element.length <= 6;
    }

    function getLong(element) {
        return element.length > 6;
    }
*/


/* REDUCE METHOD
    // .reduce() = reduce the elements of an array to  a single value

    const prices = [10, 5, 69, 42]

    const total = prices.reduce(sum);

    console.log(`$${total}`);

    function sum(accumulator, element) {
        return accumulator + element;
        // accumulator = previous element
        // element = current element
        // You can rename this names
    }

    const grades = [75, 50, 90, 80, 69, 42, 91];

    const max = grades.reduce(getMax);

    console.log(max);

    function getMax(previousElement, element) {
        return Math.max(previousElement, element);
    }
*/


/* FUNCTION
    // function declaration = define a reusable block of code 
    //                        that performs a specific task

    function hello() {
        console.log("hello");
    }
    hello();

    // function exxpressions = a way to define functions 
    //                         as values or variables

    const bye = function() {
        console.log("Bye");
    }
    bye();

    const numbers = [1, 2, 3, 4, 5, 6]; 

    const powered = numbers.map(power);

    console.log(powered);

    function power(element) {
        return Math.pow(element, 2);
    }

    // setTimeout(callback, 3000);
    // setTimeout(hello, 3000);
    setTimeout(function() {
        console.log("Hello");
    }, 2000)

    const num = [1, 2, 3, 4, 5, 6]; 

    const squares = num.map(function (element) {
        return Math.pow(element, 2);
    });

    console.log(squares);

    const evenNums = num.filter( function(element) {
        return element % 2 === 0;
    })
    const oddNums = num.filter(function(element) {
        return element % 2 !== 0;
    });

    const total = num.reduce(function( previousElement,element) {
        return previousElement + element;
    });

    console.log(evenNums);
    console.log(oddNums);
    console.log(total);

*/


/* arrow function 
// a concise way to write function expressions good for 
// simple functions that you use only once 
// (parameters) => some code

const hello = (name, age) => {console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`);
};
hello("Wiktor", 15);

setTimeout(() => console.log('Bye'), 2000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 === 1);
const sum = numbers.reduce((prevElement, element) => prevElement + element);

console.log(squares);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(sum);

*/


/* OBJECTS
    // a collection of related properties and/or methods
    // Can represent real world objects (people, products, places)
    // object = {key:value,
    //           function()}

    const person1 = {
        firstName: "Wiktor",
        lastName: "Czkafek",
        age: 15,
        isStudent: true,
        sayHello: function() {console.log(`Hi! I am ${this.firstName}`)},
        eat: function() {console.log('I am eating a small people!')},
    }
    console.log(person1.firstName);
    console.log(person1.lastName);
    console.log(person1.age);
    console.log(person1.isStudent);
    person1.sayHello();
    person1.eat();

    console.log("--------------------------------------");

    const person2 = {
        firstName: "Małgorzata",
        lastName: "Gocha",
        age: 16, //babcia
        isStudent: true,
        sayHello: () => console.log(`Hi! I am ${person2.firstName}`), // With arrow function this. method is not working
        eat: () => console.log('I eat your mom UwU'),
    }
    console.log(person2.firstName);
    console.log(person2.lastName);
    console.log(person2.age);
    console.log(person2.isStudent);
    person2.sayHello();
    person2.eat();

*/


/* CONSTRUCTOR
    // special method for defining the
    // properties and methods of objects

    function Car(make, model, year, color) {
        this.make = make,
        this.model = model,
        this.year = year,
        this.color = color,
        this.drive = function() {
            console.log(`You drive the ${this.make} ${this.model}`)
        }
    }

    const car1 = new Car("Dodge", "Challenger", 1970, "black");
    const car2 = new Car('Ferrari', '348 ts', 1990, 'red'); // color: red, bo jaki inny


    console.log(car1.make);
    console.log(car1.model);
    console.log(car1.year);
    console.log(car1.color);
    car1.drive();
    console.log("--------------------------------------");
    console.log(car2.make);
    console.log(car2.model);
    console.log(car2.year);
    console.log(car2.color);
    car2.drive();

*/


/* CLASSES
    // (ES6 feature) provides a more structured and cleaner way to 
    //  work with object compared to traditional constructor functions
    //  ex. static keyword, excapsulation, inheritance
    //  encapsulation

    class Product{
        constructor(name, price) {
            this.name = name,
            this.price = price
        }

        displayProduct() {
            console.log(`Product: ${this.name} $${this.price.toFixed(2)}`); // only 2 decimals are now shown
        }

        calculateTotal(salesTax) {
            return (this.price + (this.price * salesTax)).toFixed(2);
        }
    }
    const salesTax = 0.1;

    const product1 = new Product("T-shirt", 9.99);
    const total1 = product1.calculateTotal(salesTax);

    const product2 = new Product("Baggy Jeans", 19.99);
    const total2 = product2.calculateTotal(salesTax);

    const product3 = new Product("Shoes", 69.42);
    const total3 = product3.calculateTotal(salesTax);

    product1.displayProduct();
    console.log(`Total price: $${total1}`);
    console.log("-------------------------");
    product2.displayProduct();
    console.log(`Total price: $${total2}`);
    console.log("-------------------------");
    product3.displayProduct();
    console.log(`Total price: $${total3}`);

*/


/* STATIC
// keyword that defines properties or methods that belong
// to a class itslef rather than the objects created
// from that class (class owns anything static, not the objects)

class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }
    static getCircumference(radius) {
        return this.PI * radius * 2;
    }
    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

console.log("-------------------------");

class User {
    static userCount = 0;

    constructor(username){
        this.username = username,
        User.userCount++;
    }

    static getUserCount() {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello() {
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Czkafek");
const user2 = new User("Szyszek");

user1.sayHello();
user2.sayHello();

console.log(User.userCount);
User.getUserCount();
*/


/* ENEMY CLASS CONCEPT
    class Enemy {
        constructor(name, age, weapon, height, breed, health, maxhealth, armor) {
            this.name = name,
            this.age = age,
            this.weapon = weapon,
            this.height = height,
            this.breed = breed,
            this.health = health,
            this.maxhealth = maxhealth,
            this.armor = armor
        }

        hasBeenAttacked(hitPoints) {
            this.health = this.armor ? this.health - Math.floor(hitPoints*0.8) : this.health - hitPoints;
        }
    }

    const enemy1 = new Enemy("Czkafek", 69, "fists", 420, "Ogr", 30, 30, true);

    enemy1.hasBeenAttacked(5);
    console.log(enemy1.health);

 */

/* INHERITANCE
// allowas a new class to inherit properties and methods
// from an existing class (paren -> child)
// helps with code reusability

    class Animal {
        alive = true;

        eat(){
            console.log(`This ${this.name} is eating`);
        }
        sleep() {
            console.log(`This ${this.name} is sleeping`);
        }
    }

    class Rabbit extends Animal{ 
        name = "rabbit";

        jump() {
            console.log(`This ${this.name} is jumping`)
        }
    }
    class Fish extends Animal { 
        name = "fish";

        swimming() {
            console.log(`This ${this.name} is swimming`)
        }
    }
    class Dog extends Animal {
        name = "dog";

        bark() {
            console.log(`This ${this.name} is barking`)
        }
    }

    const rabbit = new Rabbit("Heniek");
    const fish = new Fish("Tadeusz");
    const dog = new Dog("Reksio");

    fish.alive = false;

    console.log(rabbit.alive);
    console.log(fish.alive);
    console.log(dog.alive);

    console.log('');

    rabbit.eat();
    fish.eat();
    dog.eat();

    console.log('');

    rabbit.sleep();
    fish.sleep();
    dog.sleep();

    console.log('');

    rabbit.jump();
    fish.swimming();
    dog.bark();

 */

/* SUPER
    // keyword is used in classes to call the contructor or 
    // acces the properties and methods of a parent (superclass)
    // this = this object
    // super - the parent

    class Animal {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }

        move(speed) {
            console.log(`${this.name} moves at a speed of ${speed}km/h`)
        }

    }
    class Rabbit extends Animal {
        constructor(name, age, runspeed) {
            super(name, age);
            this.runspeed = runspeed
        }

        run() {
            console.log(`${this.name} can run`);
            super.move(this.runspeed);
        }

    }
    class Fish extends Animal {
        constructor(name, age, swimspeed) {
            super(name, age);
            this.swimspeed = swimspeed
        }

        swim() {
            console.log(`${this.name} can swim`);
            super.move(this.swimspeed);
        }

    }
    class Bird extends Animal {
        constructor(name, age, flyspeed) {
            super(name, age);
            this.flyspeed = flyspeed
        }

        fly() {
            console.log(`${this.name} can fly`);
            super.move(this.flyspeed);
        }

    }

    const rabbit = new Rabbit("Heniek", 5, 60);
    const fish = new Fish("Tadek", 3, 20);
    const bird = new Bird("Krzysiu", 5, 50);
    console.log(rabbit);
    rabbit.run(); 
    console.log("");
    fish.swim();
    console.log("");
    bird.fly();

 */

/* SETTER and GETTER

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        set width(newWidth) {
            if(newWidth > 0) {
                this._width = newWidth;
            }
            else { 
                console.error('Width must be a positive number!');
            }
        }

        set height(newHeight) {
            if(newHeight > 0) {
                this._height = newHeight;
            }
            else {
                console.error("Height must be a positive number!");
            }
        }

        get width() {
            return `${this._width.toFixed(1)} cm`;
        }

        get height() {
            return `${this._height.toFixed(1)} cm`;
        }

        get area() {
            return `${(this._width * this._height).toFixed(1)} cm^2 `;
        }
        get mom() {
            if( this._width !== this._height ) {
                return `mom is mad`;
            }
            else {
                return `mom is happy`
            }
        }
    }

    const rectangle1 = new Rectangle(4, 4);

    console.log(rectangle1.width);
    console.log(rectangle1.height);
    console.log(rectangle1.area);
    console.log(rectangle1.mom);

*/

/* DESTRUCTURING

    // --------- Example 1 --------- 
        let a = 1;
        let b = 2;
        [a, b] = [b, a];
        console.log(a); // shows 2
        console.log(b); // shows 1

        console.log('');
    // --------- Example 2 ---------
        let colors = ["blue", "green", "red", "white", "black"];
        [colors[0], colors[1]] = [colors[1], colors[0]];
        console.log(colors[0]); // shows green
        console.log(colors[1]); // shows blue

        console.log('');
    // --------- Example 3 ---------
        let themes = ["blue", "green", "red", "white", "black"];

        const [firstTheme, secondTheme, thirdTheme, ...extraThemes] = themes;

        console.log(firstTheme); // blue
        console.log(secondTheme); // green
        console.log(thirdTheme); // red
        console.log(extraThemes); // white and black

        console.log('');
    // --------- Example 4 ---------

        const gocha = {
            name: "Małgorzata",
            surname: "Babcia",
            age: 420,
            school: "Staszic"
        }

        const {name, surname, age, school} = gocha; // names must be the same as in the object

        console.log(name);
        console.log(surname);
        console.log(age);
        console.log(school);

        console.log('');
    // --------- Example 5 ---------

        function displayChomik({name, surname, age, school = "your Mom"}) {
            console.log(name);
            console.log(surname);
            console.log(age);
            console.log(school);
        }

        const chomik = {
            name: "Wiktor",
            surname: "Chomik",
            age: 9,
        }
        displayChomik(chomik);

 */


/* NESTED OBJECTS

    const person = {
        name: "Wiktor",
        surname: "czkafek",
        age: 69,
        addres: {
            street: "Candy 42 st.",
            country: "Poland",
            continent: "Europe"
        }
    }
    console.log(person.addres);

    for( const property in person.addres) {
        console.log(person.addres[property]);
    }

    class Person {

        constructor(name, surname, age, ...address) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.address = new Address(...address);
        }
    }

    class Address {

        constructor(street, country, continent) {
            this.street = street;
            this.country = country;
            this.continent = continent;
        }
    }

    const person1 = new Person("Wiktor", "Czkafek", 15, "Cukierkowa 15", "Polska", "Europa");
    console.log(person1);
    console.log(person1.address)

    for(const property in person1.address) {
        console.log(person1.address[property]);
    }

 */


/* ARRAY OF OBJECTS

    const fruits = [{name: 'banana', color: 'yellow', weight: 95},
                    {name: 'apple', color: 'red', weight: 69}, 
                    {name: 'orange', color: 'orange', weight: 78}, 
                    {name: 'kiwi', color: 'brown', weight: 25}]

    console.log(fruits);

    fruits.push({name: 'plum', color: 'purple', weight: 30});

    console.log(fruits);

    fruits.forEach(fruit => console.log(fruit));

    const fruitNames = fruits.map(fruit => fruit.name);

    console.log(fruitNames);

    const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');
    const lowWeightFrutis = fruits.filter(fruit => fruit.weight < 50);

    console.log(yellowFruits);
    console.log(lowWeightFrutis)

    const maxFruit = fruits.reduce((max,fruit) => fruit.weight > max.weight ? fruit : max);
    console.log(maxFruit);

 */


/* sort() METHOD

    let numbers = [1, 10, 8 , 9, 2, 3, 18, 7];

    numbers.sort((a, b) => a-b);
    console.log(numbers);

    const people = [{name: 'Wiktor', age: 15, height: 188}, 
                {name: 'Gocha', age: 16, height: 161}, 
                {name: 'Chomik', age: 14, height: 167}, 
                {name: 'Adam', age: 15, height: 175}];

    people.sort((a, b) => a.name.localeCompare(b.name));

    console.log(people);

 */


/* CLOSURES
    // function inside another function

    function startGame() {
        let score = 0;

        function increasePoints(points) {
            score += points;
            console.log(`+${points}pts`);
        }

        function decreasePoints(points) {
            score -= points;
            console.log(`-${points}pts`);
        }

        function showScore() {
            console.log(`Current score: ${score}pts`);
        }

        return {increasePoints, decreasePoints, showScore};
    }

    const newGame = startGame();

    newGame.increasePoints(8);
    newGame.increasePoints(2);
    newGame.decreasePoints(4);
    newGame.showScore();

 */

import {PI} from './mathSmth.js';

console.log(PI);
























