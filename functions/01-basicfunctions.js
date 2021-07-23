/*
FUNCTIONS   
functions are processes that we call upon to run an action. 
they can do the following: 
- take in an input to process, modify, or respond to ( not required)
- return a value (not required)
-can be invoked (or called) as often as needed

*/
// let hi = function name
function hi(){
    console.log('hi');
    
     // 1 function keyword - we use this to define a function
     // 2 name of the function - thios is how we will call the function 
     // 3 code goes here - this will be the "brains" of the funtion 
}

// calling rhe function 
// aka putting the 'fun' in FUNction 
// in order to invoke (call) a function, we will simply write it's name and put parenthesis after it  hi()
console.log(hi());
// when we console.log a functionm java will first evaluate the function, meaning it will run all of the code and loook for a value from it. IF we do not have a return statement within the function, we will get back undefined. 

hi()

let myname = 'jerome'

function mynamecap() {
    myname = myname.toUpperCase();
    //mynamecap()
    // avoid this ^ if you can (until much later this is called recursion (calling afunciton within itself))
    // console.log will not always run or save, changes we make to to see in th econsole. it is purly for us to see what is happening
    
}
mynamecap();

console.log(myname);


/* 
Function declaration 
 a chunk of code that perfors a set chunch of code when it is invoked (or called)

*/

// function funcone() { funcone will still refer to the funciton but without () it will not invoke
    console.log(' this is the code that we run in function one');
}

console.log(funcone); 
funcone() // we invoke (or call) a function by writing it's declared name followed by parenthesis 

/*
FUNCTION EXPRESSIONS 
assigning a function to a variable is what we call expression 
*/

let first = function functwo(){
console.log('code being run in the expression in the function expression');
}

first(); 
 
let example = function(){
    console.log('what is my name?')
}

example();

console.log(typeof example); // function 
console.log(typeof example()); // undefined   

/*
ANONYMOUS FUNCTION 
-anonymous finctions are stored in memory but the runtime does not automatically create a reference to it. 

the main use would be to pass these functions thorugh another function. maybe have a ternary where if soemthing is true we run one function, else we runa different function. 
*/
// common use would be to assign these to a variable
let anon = function(){
    console.log('anonymous function')
}
 anon();
// example of writing anonymous function using ternary 
 //true || false ? function() {console.log('true')} : funtion() {console.log('false')}

// fetch ('something')
// .then(function(response){response.json()})

/*
PARAMETERS
we will be using functions to pass  in information and return a result 

parameters will allow our functions to take in ourside information 
*/

let examplenum = 16
function parameterfunc(num) {
    console.log(num);
}
parameterfunc(7)



function parameterFunc(num) {
    console.log(num + 1);
    return num + 5; // sends back a value for the function when it is run
  }
  parameterFunc(7);
  parameterFunc('bruce');
  parameterFunc('another test');
  parameterFunc([1,2,3,4,5]);
  //return will essentially set the function = to something

  let returntest = 5 
  parameterFunc(returntest); // 6
  console.log(parameterfunc(returntest)) // ? 

  
function parameterFunc(num) {
    console.log(num + 1);
    return num + 5;
    }
    let returntest = 5
    parameterFunc(returntest);
    let myreturn = parameterfunc(returntest)
    console.log('return:', myreturn)

    let firstname = 'jane';
    let lastname = 'doe';

    function greeting(first, last){
        console.log(`hi, ${first}! welcome back`);
        console.log(`this is the first parameter: ${first}`);
        console. log(`this is the last parameter: ${last}`);

    }

    greeting(firstname);
    greeting(lastname);
    greeting();
    greeting(firstname, lastname);
    greeting(firstname, null);
    greeting('', lastname);