// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '+'];





// Write password to the #password input
function writePassword() {
  
  window.confirm('Would you like Capital letters in your password?');
if (confirm(Math.random(upperCase)));

  window.confirm('Would you like lowercase letters in your password?')
  if (confirm(Math.random(lowerCase)));

  window.confirm('Would you like numbers in your password?');
  if (confirm(Math.random(numbers)));
 
  window.confirm('Would you like special characters in your password?');
  if (confirm(Math.random(specail)))

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
