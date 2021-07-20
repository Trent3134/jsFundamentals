/*
what is a variable

variables are named containers for sorting data.
we can think of these containers as resources we can call upon later. Each variable allows us to store data, which could be a value or a function., that we will want to reference back to
*/

let a = 2; 

/*
-"let" is our keyword.
- 'a' is our name of our variable 
-"=" is our assignment opperator
- "2" is our variable's value
*/

let b = 1;

console.log(a + b); // what should we get? 3

/*
restrictions with variables

- a variable must begin with a letter,  underscore or dollar sign. 
- number may follow the above characters, but cannot come rist in the name. 
-javascript is also case sensitive-- "hello" and "Hello" are different
-no spaces are allowed in variable names
-camelcase is best practice for naming variables in JS. this will help keep names of variables readable
ex- 
let myName = 'trent';
is easier to read than
let myname = "trent";


*/

//  'breaks'cannot start a variable name with a number
// let -startingWithDash = 'breaks'; //cannot start with a - //
let startingwithletter = 'test';
let _startingWithUnderscore = "test";
let $startingWithDollarSign = 'test'; 
console.log(startingwithletter, _startingWithUnderscore, $startingWithDollarSign,)

// ctrl alt n will run code runner

/*
KEYWORDS

var, let, const

- var: the 'old' keyword for variables. we will not use this much but it is still used depending on the project and when it wass made. we will focus on let and const. 

- let: the 'new' keyword for variables which was introduced in es6 * newest berson of ecmascript, which is a standardization of JS

- const: also 'new' and declares an unchageable or constant, variable. the only limit to constant variables is that once they are declared,/assigned their values will NEVER change. 
*/

var variable = 'var variable';
let letVariable = 'let variable';
const constVariable = 'const variable'

console.log(variable, letVariable, const Variable);

/*
 declarations are the LEFT SIDE of the assignment operator (=) within a variable 
 -let x
 
 initializations are the RIGHT SIDE of the asignment operator (=) and sets the value of the variable 
-let x = 10........... 10 would be the initialization 
*/

let x;
console.log('declaration:',x);

x = 10;
console.log(x);

