// pseudo code
//SET UP
// 1 - When I click the generate button, trigger pw generation script function
// 2 - Establish varialbes for character types
// 3 - Ask user the length of the generated password   
// 4 - Use a series of confirm prompts to ask if user wants to include certain character types

//LOGIC
// 5 - Randomly select a random character from STRING - use Math.random()
//Math.floor(Math.random()*String.length)


// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
var combinecharactors = "";

generateBtn.addEventListener("click", setPasswordOptions)

function setPasswordOptions() {
    // prompt for password length needs to be set up between 8-128 charactors. 
    // if the choosen password lengt doesn't meet the requirement, the window will alert user and reture for asking again.
    var length = prompt("How many characters do you want to pick? (Should be between 8-128 charactors.");
    if (length < 8 || length > 128) {
        alert("Your password length didn't meet the requirement. Please reset it.");
        setPasswordOptions()
    }

    // prompt for lowercase
    var lowerCase = confirm("Do you want lowercase charactors?");
    if (lowerCase) {
        combinecharactors += lowercase;
    }
    // prompt for uppercase
    var upperCase = confirm("Do you want uppercase charactors?");
    if (upperCase) {
        combinecharactors += uppercase;
    }
    // prompt for numeric
    var numeric = confirm("Do you want numeric charactors?");
    if (numeric) {
        combinecharactors += numbers;
    }
    // prompt for special charaters
    var special = confirm("Do you want special characters?");
    if (special) {
        combinecharactors += symbols;
    }

    //if statement checks if at least one char type is chosen, check if the password length is between 8-128, else run the generatePassword function
    // if statement checks if all charactor options are not been chosen, the window will alert user and run for asking agin. 
    if (!lowerCase && !upperCase && !numeric && !special) {
        alert("your password should have one of options");
        setPasswordOptions()
    } else {
        generatePassword(length)
    }
}

function generatePassword(length) {
    //   the function will randomly generate password by user required for the charactor types and password length when user click the Generate Password botton.
    //   the randomed password will print out in the textarea when all requires are met.
    var password = "";
    for (let i = 0; i < length; i++) {
        var randomChar = combinecharactors.charAt(Math.floor(Math.random() * combinecharactors.length))
        password += randomChar
    }

    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;

    console.log(password);


}