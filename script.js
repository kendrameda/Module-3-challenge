// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];


var length;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSpecial;

function createPassword() {
  window.prompt("Between 8 and 50, how many characters would you like your password to have?")

  window.confirm('Would you like Capital letters in your password?');


  window.confirm('Would you like lowercase letters in your password?')
  

  window.confirm('Would you like numbers in your password?');
 
 
  window.confirm('Would you like special characters in your password?');
}


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
