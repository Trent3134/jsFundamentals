/*
DATA and STRUCTURE TYPES

-primitive data types: 
-boolean 
- undefined 
-string
-number
-bigInt**
-symbol** these two do not come up much but part of js 
-null
-object
-function

*/

/*
boolean
a boolean has two possible values: true or false
*/

let on = true; 
let off = false; 

console.log(on);
console.log(off);

/*
NULL
a null value is an empty balue. think of it as en empty container that has space to fill. note: null and undefined are two different things
*/

let empty = null; 
console.log(empty);

/*
UNDEFINED
no value had been assigned to a container and does not even act as an empty container. 
*/

let unknown; 
let undef = undefined; 

//what is the difference between null and undefined?
/*
- null has a container with nothing in it 
- undefined is a variable that has never been set, or it has not been created yet. 
*/

/*
NUMBERS

literally just numbers
*/

let degrees = 82; 
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; // 15 9's until java rounds up 
console.log(rounded);

let notQuite = 0.2 + 0.1; 
console.log(notQuite);

let whatif = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatif);

/*
 strings represent text and are wrapped in either single or double quotes.                        
*/

let doubleQuote = 'double quote'
let singleQuote = 'single quote'
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = ' I said, "how cool is that?"';
let bothquotesALT = "i then said.. 'it is pretty cool right?'";
console.log(bothQuotes);
console.log(bothquotesALT);

const contractions1 = "now you cannot run into any issues"
const contractions2 = 'now you can\'t run into any issues'

// numbers and strings 
let addthese = 1050 + 100; 
console.log(addthese);

let addthesealso = '1050' + '100';
console.log(addthesealso);

// we can use an operation called 'typeof' to return the type a string of the variable's type 

console.log(typeof addthese);
console.log (typeof addthesealso);

let addtest = 1050 + '100';
console.log(addtest);

/* 
objects 
objects are used to store many balues instead of just one.
consider them as a collection of different variables in one container 
denoted by curly backets {} 
*/

let frodo = {
    // an object has many properties inside of it 
    race: 'hobbit', // string
    //name : value 
    // we must seperate properties in an object with a commma
    rings: 1, // number
    string: true // boolean 
}

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); //dot notation (getting to this later in depth )

/*
        ARRAYS  

        CONTAINER TAHT HOLD ALOST OF ITEMS 
        denoted by square brackets: []
        all items are within the square backets regarless of teh data tyhpe, all items are seperated by commas. 
*/

let arraylist = ['position 1', 'position 2', 'position 3'];
console.log(arraylist);

let anotherexample = ['muffins', 'pizza toppings', 'true', '17', 'false', 'null', 'undefined']
console.log(anotherexample);

console.log(typeof anotherexample);

/*
addition vs concatenation 

JS see the + symbol in two diferent ways 
-when we use it with numbers, it will use the built- in math functionality 
- when we use it with strings, it willignore the mathfunctionality and concats, or combines, the two strings into one
*/

let strings = 'one' + '' + 'is a number';
console.log(strings);

let concatdiff = 1050 + '100';
console.log(concatdiff);
console.log(typeof concatdiff);

let firstname = 'Trent'; 
let lastname = 'conway';
let housenumber = 741; 
let street = 'willow-lane';
let city = 'plainfield'; 
let state = 'Indiana';
let zipcode = 46168;

console.log(firstname, lastname + ',', housenumber, street + ',', city + ',', state, zipcode)

/*
string: properties 

properties are qualities associated with a data type 
strings have properties, or qualities associated with them
the length of a string is a property
*/

let myname = 'trent';
console.log(myname.length);

/*
STRING: METHODS

methods are tolls that can help us manipulate data
.property (dot notation), .method ()
no ()                       use ()
*/

let mynameis = 'trent';
console.log(mynameis.toUpperCase());

let home = 'my home is in plainfield'
console.log('includes method:', home.includes('plainfield'));

let sent = 'this sentence will be split into individual parts';

const str = 'the quick brown fox jumps over the lazy dog';
const word = sent.split(' ');
console.log(word);