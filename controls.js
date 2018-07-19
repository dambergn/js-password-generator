'use strict';

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
  let passwordNoSimilarCharacters = document.getElementById("similar-characters").checked;
  let passwordNoSequentialCharacters = document.getElementById("sequential-characters").checked;

  let passwordLength = document.getElementById("password-length").value;
  let result = generatePassword(
    passwordLength,
    passwordLowerCase,
    passwordUpperCase,
    passwordNumbers,
    passwordSpecialCharacters,
    passwordOptionalCharacters,
    passwordBeginsWithLetter,
    passwordRepeatingCharacters,
    passwordNoSimilarCharacters,
    passwordNoSequentialCharacters
  );
  document.getElementById("generated-password").value = result;
});