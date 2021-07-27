/*
ARROW FUNCTIONS
are expressional functions that can be simplified into one of two forms: concise body and block body. the main goal is to generate shorter syntax for writing a function 
*/

// regular function 
function regfunc() {
    console.log('just a regular function')
}
regfunc();

//      1       2   3        4
let arrowfunc =  () =>  console.log('function in one line')
arrowfunc();
/*
1.a variable created to hold the balue of our anonymous arrow function 
- arrow functions are always anonymous 
2. parameters are still capable of being added 
- parameters go in the () as they would in a normal function, BUT if we only have 1, no more or less, parameter, we do not need (). if we have no parameter we are stilll required to put ()
3. 'how we see an arrow'. this is java syntax that says we are about to process a function.
4. the code the arrow function will run (the do this part)
*/

 let arrow = (x) => console.log(x);
 arrow(10);

 /*
concise vs BLOCK BODY
when we have a simple return or response, from our arrow function, it makes sense to write it ina concise, simlified way. when we use a concise body arrow function, the 'return' 
statment is implied ( meanign we do not have to write it)

 */
                            //impllied return
                            //return x+y
let concisebody = (x,y) => x + y
let result = concisebody (1,2); // return sets concisebody (1,2) = 3
console.log(result);

let slightlycomplexconcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2 `) : console.log(`${x} and ${y} are where we want them`)

slightlycomplexconcise(3,1);

// BLOCK BODY
// the 'return ' keybword is required. we will also  include curly braces
// sometiems it will make sense to use block body if we need to do multiple lines of code. 

let blockarrow = (x,y) => {
    return `${x} and ${y} are in a block body function`
    //any code below thr return statement in a function will be ignored. if we werite code below it, it will not run
   // console.log();
    
}
console.log(blockarrow(1,2));
// variable will hold the balue of the return string
let blockresponse = blockarrow (1,2);

/*
challenge

shot(hero,nock);
let hero = 'Robin Hood';
let nock = 1;
let shot = (x, y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`${x} shot ${y} arrows at the target!`);
shot(hero, nock);

*/

let hero = 'robin hood '
let nock = 1;

let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y}arrow`): console.log(`${x}shot ${y} arrows at the target`);

shot(hero, nock);

//* Using a block body arrow function, pass the same variables but increase the number of shots until the second console.log is printed

let hero = 'robin hood'
let nock = 1; 

// first- the block body arrow function (?) [*]
// second- pass in 2 variables []
// three- run the conditional []
// four-repeat the code until the result changes []

let shoot = (x,y) => {
    for(y; y < 4; y++){
        console.log('y:',y);
     if(y < 3) {
          console.log(`${x} only shot ${y}arrow`)
} else{ 
console.log(`${x}shot ${y} arrows at the target`);
};
    };
}

shoot(hero, nock)

function whatdoesitdo(color) {
    if (color !== 'blue' || color !== 'green') {
        color = 'red'; 
    }
};