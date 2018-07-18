'use strict';

console.log("app.js loaded");

//constant values to use with password.
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //26 characters
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //26 characters
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; //10 characters
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']; //10 Characters
const optionalCharacters = ['-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '\"', '<', '>', ',', '.', '?', '/', '|', '`', '~']; //21 Characters

//function to generate random password
function generatePassword(passwordLength, lower, upper, numb, special, optional, firstLetter, repeat) { //passwordLength determines how many characters the password will be.
  let generatedPassword = [];
  let parameters = [];

  //set lower case by default
  if (lower == false) {
    //do nothing
  } else if (lower == null || true) {
    parameters.push(lowerCase);
  };

  //set upper case by default
  if (upper == false) {
    //do nothing
  } else if (upper == null || true) {
    parameters.push(upperCase);
  };

  //set numbers case by default
  if (numb == false) {
    //do nothing
  } else if (numb == null || true) {
    parameters.push(numbers);
  };

  //enables special characters
  if (special == true) {
    parameters.push(specialCharacters);
  }

  //enables optional characters
  if (optional == true) {
    parameters.push(optionalCharacters);
  }

  for (let i = 0; i < passwordLength; i++) {
    let charSet = Math.floor(Math.random() * parameters.length);
    let charSel = Math.floor(Math.random() * parameters[charSet].length);

    //Checking password for speficied modifications

    if (repeat == true) {
      if (parameters[charSet][charSel] === generatedPassword[i - 1]) {
        console.log('duplicate character found and dropped');
        generatedPassword.pop();
        i--;
      }
    }

    generatedPassword.push(parameters[charSet][charSel]);

    // if enabled will make sure first character is a letter.
    if (firstLetter == true) {
      // need something to prevent selecting false on upper and lower case to cause crash.

      let first = false;
      if (i == 0) {
        console.log('first letter option selected.');
        for (let j = 0; j < lowerCase.length; j++) {
          if (generatedPassword[0] == lowerCase[j] || generatedPassword[0] == upperCase[j]) {
            first = true;
          }
        }
        if(first == false) {
          console.log('First character not a letter');
          generatedPassword.pop();
          i--;
        }
      }
    }
  };
  console.log('gen pass length: ', generatedPassword.length);
  return generatedPassword.join('');
};

//function to generate password to web page
document.getElementById("generate-password").addEventListener("click", function (event) {
  event.preventDefault();

  //choose character options and customization
  let passwordLowerCase = document.getElementById("lower-case").checked;
  let passwordUpperCase = document.getElementById("upper-case").checked;
  let passwordNumbers = document.getElementById("numbers").checked;
  let passwordSpecialCharacters = document.getElementById("special-characters").checked;
  let passwordOptionalCharacters = document.getElementById("optional-characters").checked;
  let passwordBeginsWithLetter = document.getElementById("begin-with-letter").checked;
  let passwordRepeatingCharacters = document.getElementById("repeating-characters").checked;

  let passwordLength = document.getElementById("password-length").value;
  let result = generatePassword(
    passwordLength,
    passwordLowerCase,
    passwordUpperCase,
    passwordNumbers,
    passwordSpecialCharacters,
    passwordOptionalCharacters,
    passwordBeginsWithLetter,
    passwordRepeatingCharacters
  );
  document.getElementById("generated-password").value = result;
});