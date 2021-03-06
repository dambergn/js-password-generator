'use strict';

//function to generate password to web page
document.getElementById("generate-password").addEventListener("click", function (event) {
  event.preventDefault();

  //choose character options and customization
  let passwordLength = document.getElementById("password-length").value;
  let passwordLowerCase = document.getElementById("lower-case").checked;
  let passwordLowerCaseMin = document.getElementById("lower-case-min").value;
  let passwordUpperCase = document.getElementById("upper-case").checked;
  let passwordUpperCaseMin = document.getElementById("upper-case-min").value;
  let passwordNumbers = document.getElementById("numbers").checked;
  let passwordNumbersMin = document.getElementById("number-min").value;
  let passwordSpecialCharacters = document.getElementById("special-characters").checked;
  let passwordSpecialMin = document.getElementById("special-case-min").value;
  let passwordOptionalCharacters = document.getElementById("optional-characters").checked;
  let passwordOptionalMin = document.getElementById("optional-case-min").value;
  let passwordBeginsWithLetter = document.getElementById("begin-with-letter").checked;
  let passwordRepeatingCharacters = document.getElementById("repeating-characters").checked;
  let passwordNoSimilarCharacters = document.getElementById("similar-characters").checked;
  let passwordNoSequentialCharacters = document.getElementById("sequential-characters").checked;

  let result = generatePassword(
    passwordLength,
    passwordLowerCase,
    passwordLowerCaseMin,
    passwordUpperCase,
    passwordUpperCaseMin,
    passwordNumbers,
    passwordNumbersMin,
    passwordSpecialCharacters,
    passwordSpecialMin,
    passwordOptionalCharacters,
    passwordOptionalMin,
    passwordBeginsWithLetter,
    passwordRepeatingCharacters,
    passwordNoSimilarCharacters,
    passwordNoSequentialCharacters
  );
  document.getElementById("generated-password").value = result;
});