function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (Number(length.value) <= 0) {
        return `(password length must be at least 1)`;
    }
    
    if(allowedChars.length === 0) {
        return `(at least 1 set of characters must be selected)`;
    }

    for( let i = 0; i<Number(length.value); i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}


const passwordLength = document.getElementById("length");
const includeLowercase = document.getElementById("Lowercase");
const includeUppercase = document.getElementById("Uppercase");
const inlcudeNumbers = document.getElementById("Numbers");
const includeSymbols = document.getElementById("Symbols");

function displayPassword() {
    const password = generatePassword(passwordLength, 
                                      includeLowercase.checked, 
                                      includeUppercase.checked, 
                                      inlcudeNumbers.checked, 
                                      includeSymbols.checked);
        
    document.getElementById("result").textContent = `Generated password: ${password}`;
}
