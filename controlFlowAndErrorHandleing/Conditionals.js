/*
CONDITIONALS 
FALSY VALUES
- a value considered false when encountered in a boolean context. there are 6 falsy values in JS:
- false
-0 
-"", '', ``
- null
- undefined 
-NaN

what does this mean?
whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false. 

Side notes: there are also truthy values in JS which tend to be muich less limited. examples: true, 
{},
 [],
  42,
 'false',
 fractiion 
........ basically if something has value it is true 
*/

// test if fractions are truthy 

/*
        IF STATEMENT
    When we use coparison operators, we typically are asking if we can move on to the next section of code/ "if" something is true, do "this thing"
*/


// keyword    expression 
if(truth) {
//code to run if the expression evaluates to true. 
console.log('truthy test');
}

//condition if false
if(false){
    console.log('falsy test')
}

let light = 'on';

if(light == 'on');{
    console.log('the light is on');
}

let weather = 65;
let rain = true;

if(weather < 70 && rain == true){
    console.log('maybe wear a jacket')
}

let batman = 'is the night';
let bruce = true;  
    
    if(bruce ==true && batman == 'is the night') {
    console.log('batman!');
}

/*
IF ELSE 

we can think of this as not only providing an answer if our conidition evaluates to be true, but also one if it ends up being false. 
*/

let today = 75; 

if(today < 70){
    //                  ^^ string interpolation also only works with back ticks "``"
    console.log(`It's ${today}, wear a jacket!`);
} else {
    console.log(`It's ${today}. no jacket needed!`);
}

/*
ELSE IF 
this is a condition that will be checked if the above condition was not met
*/

let cooktime = 60;

if(cooktime === 45){
    console.log('let us feast!');
} else if(cooktime > 45){
        console.log(`it has been ${cooktime}?? might need a glass of water with this one!`);
} else if(cooktime >= 30){
    console.log(`it has only been ${cooktime} minutes. wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`it has only been ${cooktime} minutes. wait another 10-25 minutes.`);
}else 
    console.log(`it has only been ${cooktime} minutes. perhaps we could at least try cooking it...`);
}


let age = 22;

if(age <= 17){
    console.log('sorry, you are too young to do anything');
} else if (age >= 25){
    console.log('you can rent')
} else if (age >= 21);{
    console.log('you can drink');
} else if (age >= 18){
    console.log('you can vote');
}

/*
TERNARIES 
-they are if/else statements but they look weird 
ternaries order:
condition ? firstCodeBlock : secondCodeBlock
*/

let myname = 'trent';
//if else 
// condition 
if(myname === 'trent'){
    console.log(`hi, ${myname}!`);
} else {
    console.log(`not sure i know ${myname}`);
}
//ternary 
//condition ? if true :  else result 
//condition                         if true run this                        else run this
myname === 'trent' ? console.log(`hi, my ${myname}!`) :
console.log(`not sure i know ${myname}`);
(`not sure i know ${myname}`);


let hero = 'batman'; 
let villain = 'mr. freeze';

hero == 'batman' && == 'riddler' ? 
console.log('what has a head and tail but no body?') :
 hero == 'batman' && villian == 'joker ' ?
console.log('why so serious') :
hero == 'batman' && villian 'mr. freeze' ? 
console.log('ice to meet you'); :
console.log(`${hero} is the night!`);


let lampOn = false;
let daytime = true;
// != is ! = (with no spaces)
if(lampOn == true && daytime != true)   {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}




/*
switch statements 
-executes a block of code depending on different cases
*/

let instructor = 'jerome';

switch(instructor) {
    //if instructor === 'jerome'
    case 'jerome':
        console.log(`${instructor} is a part of the web development team`);
        //break same as ending {} of if statement 
        break; 
        case 'summer':
        console.log(`${instructor} is a part of the web development team`);
        break;
        case 'josh':
            console.log(`${instructor} is a part of the software development team`);
            break;
            // else
            default: 
            console.log(`sorry i can't find what ${instructor} teaches at this time`)
            break;
}

let staff = 'jerome';

switch(staff){
    case 'jerome': 
    case 'summer':
    case 'levi':
    case 'adam':
    case 'hustin':
        console.log(`${staff} is a part of the web development team`); 
        break;
        case 'josh':
        case 'amanda':
        case 'casey':
        case 'junior':
        console.log(`${staff} is a part of the software development team`)
        break; 
        default:
            console.log(`sorry can't find what ${staff} teaches.`)
}

let switchconditional = true

switch(typeof switchconditional == 'string' || typeof switchconditional == 'boolean') {
    case true: 
    console.log(`${switchconditional} is a string or boolean!`)
    break;
    default: 
    console.log(`${switchconditional} is NOT a string or boolean`);
}

let grade = 80
switch (true) {
    case grade <= 89:
        console.log(`your grade is ${grade}, you have an A`)
        break;
        case grade >= 79: 
        console.log(`your grade is ${grade}, you have a B`)
        break;
        case grade >= 66: 
        console.log(`your grade is ${grade}, you have a c`)
        break;
        case grade >= 59: 
        console.log(`your grade is ${grade}, you have a d`)
        break;
        case grade >= 0: 
        console.log(`your grade is ${grade}, you have a f`)
        break;
        default:
            console.log("please insert a value");
        break;
}


let character = "dwight"

character === "michael" ? console.log('that is what she said!'):
character === 'dwight' ? console.log('it is not weed it is hemp'):
character === 'jim' ? console.log('bears, beets, batlestar galactica'):
console.log('*slow camera zoom*');




let character = "jim"
switch(true) {
    case character === 'michael':
    console.log(`that's what she said${character}`);
    break; 
    case character === 'dwight':
    console.log (`it's not weed! it's hemp ${character}`);
    break; 
    case character === 'jim':
    console.log(`bears, beets, batlestargalactica. ${character}`);
    break;
    default:
        console.log("*slow camera zoom*");
}

            OR

let character = "jim"

switch(true) {
    case 'michael':
    console.log(`that's what she said`);
    break; 
    case  'dwight':
    console.log (`it's not weed! it's hemp `);
    break; 
    case 'jim':
    console.log(`bears, beets, batlestargalactica.`);
    break;
    default:
        console.log("*slow camera zoom*");
}










myname === 'trent' ? console.log(`hi, my ${myname}!`) :
console.log(`not sure i know ${myname}`);
(`not sure i know ${myname}`);
