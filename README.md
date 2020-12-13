# JavaScript: [Password Generator](https://aprilyanggarwood.github.io/Password-Generator/)

## Goal

This homework practice is to create an application which work for user to generate a random password by user-selected criteria when he/she click the button of Generate Password. This application will help user to create a strong password that provides greater security.

## Codes are used in the js file

I used the following codes in the js file in order to enable this application to perform the requested functions:

- variables, strings
- loops: for statements
- if - else statements
- functions: alert(), confirm(), prompt()
- String Methods: CharAt()
- Event and Math methods: addEventListener() ， Math.floor(Math.random()\*String.length)
- Events: onclick
- comparison and logical operators: > , < , || , ! , && .

## How this application work for user

1, Establised variables for setting up the rules which includes the types of characters and the length of password.

2, Used one prompt and four confirm questions to ask user what he/she wants for the length of the password and if includes certain character types in his/her password. If user didn't follow the rules of the generated password to answer the questions, the alerts will tell user which rules he/she must to be followed, and the questions will run again by executing multiple if...else statements.

3, When user followed the rules to answer the questions, then the random password that meets the user's certain criteria will be generated for user and rendered in the text area of the card by executing the for loop statement and the event and math method.
