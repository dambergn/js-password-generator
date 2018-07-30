# js-password-generator
a fully featured password genorator that can be used as a web app or as part of another application, such as generating passwords for account resets or as part of a password manager.

This application is still in development, at the bottom are a list of features desired for the app and which ones are complete.

There is a live version of this app at http://www.mhzsys.net/applications/js-password-generator/

This generator is based on and inspired by the password generator at, 
https://passwordsgenerator.net/

The app has the ability to chose what type of characters to use with several customization options.  The use of Upper Case, Lower Case, And numbers is use by default.

To call the function simply use generatePassword({_length: 8}); with the first paramater being a number stating how many characters long you want the password to be.  Other options are available below and can be added by sperating them in the function with a comma ,

- _length: #number  -Determines length of password
- _lower: true/false        -If you want to use lower case letters
- _lowerMin: #number        -If you want a mimimum ammount of lower case letters used
- _upper: true/false        -If you want to use upper case letters
- _upperMin: #number        -If you want a mimimum ammount of upper case letters used
- _numb: true/false         -If you want to use numbers
- _numbMin: #number         -If you want a minimum ammount of numbers to be used
- _special: true/false      -If you want to use special characters [!, @, #, $, %, ^, &, *, (, )]
- _specialMin: #number      -If you want a minimum ammount of special characters to be used
- _optional: true/false     -If you want to use optional characters [-, _, =, +, [, ], {, }, ;, :, '', ", <, >, ,, ., ?, /, |, `, ~]
- _optionalMin: #number     -If you want a minimum ammount of optional characters to be used
- _firstLetter: true/false  -If you want the first character to be a letter
- _repeat: true/false       -If you do not want two of the same character next to each other
- _noSimilar: true/false    -If you do not want to use similar looking characters.
- _noSequential: true/false -If you do not want characters that are normally next to each other to be used as such, 123, abc, etc.


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
- [X]Find a better way to specify options while calling the function.

# Similar characters
These characters are often mistaken for each other if being typed or especially if being written down.
o O 0 i j l I S $ 5 B 8