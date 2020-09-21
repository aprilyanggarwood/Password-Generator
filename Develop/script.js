// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



// prompt for lowercase
var lowerCase = confirm("Do you want lowercase?");

// prompt for uppercase
var upperCase = confirm("Do you want uppercase?");

// prompt for numeric
var numeric = confirm("Do you want numeric?");

// prompt for special charaters
var special = confirm("Do you want special characters?")

if (lowerCase === false && upperCase === false && numeric === false && special === false) {

  alert("One character type must to be selected")

  return;
}

// Write password to the #password input
var

function writePassword() {
  var allowed = ""

  var passwordLength = prompt("What is the length of you password? (8-128 characters)");
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 {
      alert("Password Length must be between 8-128 characters.");
      passwordLength = prompt("What is the length of you password? (8-128 characters)")
      for (var i = 0; i < passwrodLength; i++) {
        var random = Math.floor(Math.random() * allowed.length);
        passwrod += allowed[random];
      };


    }

    var passwordText = document.querySelector("#password");

    passwordText.value = passwords() {
      var passwordString = passwordArray.join("")



      var passwrodOptions = {
        lowCase: lowerCase,
        uppercase: upperCase,
        numeric: mumeric,
        special: special,
        passwordLength: passwordLength



      };







      return passwrod;

    }



  }


}



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);