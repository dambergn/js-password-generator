'use strict';

console.log("app.js loaded");

//constant values to use with password.
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 characters
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 characters
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 characters
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']; //10 Characters
const otherCharacters = ['-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '\"', '<', '>', ',', '.', '?', '/', '|', '`', '~']; //21 Characters

//what paramaters to use to generate password.
// let parameters = [lowerCase, upperCase, numbers, specialCharacters];

//function to generate random password
function generatePassword(passwordLength, lower, upper, numb) { //passwordLength determines how many characters the password will be.
  let generatedPassword = [];
  let parameters = [];

  //set lower case by default
  if(lower == false) {
    //do nothing
  }else if (lower == null || true) {
    parameters.push(lowerCase);
  };

  //set upper case by default
  if(upper == false) {
    //do nothing
  }else if (upper == null || true) {
    parameters.push(upperCase);
  };

  //set numbers case by default
  if(numb == false) {
    //do nothing
  }else if (numb == null || true) {
    parameters.push(numbers);
  };


  for (let i = 0; i < passwordLength; i++) {
    let charSet = Math.floor(Math.random()*parameters.length);
    let charSel = Math.floor(Math.random()*parameters[charSet].length);
    //checks if a repeating character
    if (parameters[charSet][charSel] === generatedPassword[i - 1]) {
      console.log('duplicate character found and dropped');
      i--;
    } else {
      generatedPassword.push(parameters[charSet][charSel]);
    }
  };
  console.log('gen pass length: ', generatedPassword.length);
  return generatedPassword.join('');
};

//function to generate password to web page
document.getElementById("generate-password").addEventListener("click", function(event){
  event.preventDefault();
  
  //choose character options and customization
  let passwordLowerCase = document.getElementById("lower-case").checked;
  let passwordUpperCase = document.getElementById("upper-case").checked;
  let passwordNumbers = document.getElementById("numbers").checked;
  
  let passwordLength = document.getElementById("password-length").value;
  let result = generatePassword(passwordLength, passwordLowerCase, passwordUpperCase, passwordNumbers);
  document.getElementById("generated-password").value = result;
});