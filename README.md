# js-password-generator
a fully featured password genorator that can be used as a web app or as part of another application, such as generating passwords for account resets or as part of a password manager.

This application is still in development, at the bottom are a list of features desired for the app and which ones are complete.

There is a live version of this app at http://www.mhzsys.net/beta/applications/js-password-generator/

This generator is based on and inspired by the password generator at, 
https://passwordsgenerator.net/

The app has the ability to chose what type of characters to use with several customization options.  The use of Upper Case, Lower Case, And numbers is use by default.

To call the function simply use generatePassword(8); with the first paramater being a number stating how many characters long you want the password to be.  If you want to add more options use true or fasle in weather you want to use them or not.  If you choose you want to use any of the other cases you need to call weather or not you want lower upper and numbers defaults will be over written.

replace # with the numerical character length you want the password to be.
replace the other options with true or false depending on if you want to use those options.

generatePassword(#, lowerCase, upperCase, numbers, specialCaracters, optionalCharacters, beginsWithALetter, repeatingCharacters);

# Features
- [X]Choose password length.
- [X]Choose lowercase.
- [X]Choose uppercase.
- [X]Choose numbers.
- [X]Choose special characters.
- [X]Choose other special characters.
- [X]Prevent repeats.
- [X]Ensure first character is a letter.
- [X]Exclude similar characters. (helpful if the password is not being coppied and pasted)
- [X]Basic presets if options are not selected.
- [X]Don't use sequential characters.
- [ ]Choose specific characters to exclude.
- [ ]Spefify a minimum ammount for each character type.
- [ ]Password strength checker.

# Bugs and fixes
- [ ]Prohibbit combination of no uppercase, no lowercase, begins with a letter. (causes crash)
- [ ]Find a better way to specify options while calling the function.

# Similar characters
These characters are often mistaken for each other if being typed or especially if being written down.
o O 0 i j l I S $ 5 B 8