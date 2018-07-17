'use strict';

console.log("app.js loaded");

//constant values to use with password.
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 characters
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 characters
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 characters
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']; //10 Characters
const otherCharacters = ['-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '\"', '<', '>', ',', '.', '?', '/', '|', '`', '~']; //21 Characters

//what paramaters to use to generate password.
let parameters = [lowerCase, upperCase, numbers, specialCharacters, otherCharacters]; 

//function to generate random password
function generatePassword(passwordLength) { //passwordLength determines how many characters the password will be.
  let generatedPassword = [];
  console.log('password length 2: ', passwordLength);
  for (let i = 0; i < passwordLength; i++) {
    let charSet = Math.floor(Math.random()*parameters.length);
    let charSel = Math.floor(Math.random()*parameters[charSet].length);
    generatedPassword.push(parameters[charSet][charSel])
  }
  // console.log(generatedPassword.join(''));
  return generatedPassword.join('');
};

//function to generate password to web page
document.getElementById("generate-password").addEventListener("click", function(event){
  event.preventDefault();
  let passwordLength = document.getElementById("password-length").value;
  console.log('password length 1: ', passwordLength);
  let result = generatePassword(passwordLength);
  console.log('result: ', result);
  document.getElementById("generated-password").value = result;
  // return result;
});