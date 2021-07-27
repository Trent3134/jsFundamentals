// Loops 
/*
Loops allow us to go over a block of information or code in a determinded amount of cycles.
 It's important to note that it is possible for us to write code without declaring an endpoint

 loops help us repeat a process without writing a lot of code.
*/

/*
structure
 
we have to set up our loops in a way that we can, 
1) see where we are in a loop 
2)consider what sort of condition we want to run it against
3) note when we are done with that condition and move on to the next iteration 

we need to : 
1) creat an index 
2) run  a condition 
3) change the indexing variable (execution of condition ) 
*/

// lets count to 10

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/*
we state our loop with a "for". within this function, we are injecting some parameters that JS will run against.
index
condition 
change index to the result 

within interparameter, we are stating our index declaration to 0. this is our baseline. we move on to asking if that variable is less than or equal to 10. 
take that set number and add 1 to it. once that is proccesed return that value (this is case "console log" of that number) 
once our conidtion is met we return the FALSE which ends out loop 

THIS is important to note: 
for (< creat an index variable); <run condition > followed by a semi colon <change index> close coniditon with () then addd set of {
<return results> 
<condition until the condition is met>
}
*/

// if we do not indicate what our condition is the loop will not have a finish line. and thus run until we have to force close. 

// INFINITE LOOP!
/*
FOR (let i = 0; i++){
    console.log(i);
}

no condition means that JS never knows when to stop, and will never assume that information


*/

for (let a = 2; a > -10; a -= 4) {
    console.log(a);
}

/*
we are't limited by positve or negative numbers. we can cycle through variables asigned with strings
*/

let word = 'supecalifragilisticexpialidocious'

for (let b = 0; b < word.length; b++) {
    //length is a string method, we can use in JS that helps us determine a value we may not know. 
    console.log(b, word[b]);

    //1) we set a value of each index and are displaying that.
    // 2) we set to display the value within the object of word. each character that is assigned to the variable of 'word' is provided an index value and this is how we are cyling through it 
    console.log(` the letter ${word[b]} is in position: ${b}`)
}

/*
FOR IN LOOPS 

with for loop , we are seeking an index value and ruuning it against a condition. for in loop sdo not require an index number

*/

let city = {
    name: 'indianapolis',
    pop: 87700,
    speedway: true
}

for (info in city) {
    console.log(info)
    console.log(city[info]) // city. info looks for city= {info: 'value'}
}

/*
for (variable in object){
    run code
}
*/

//           0          1      2              3        4
let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/*let list = {
    0: 'milk'
    1: 'eggs'
    2: 'lunch meat'
    3: 'bread'
    4: 'bananas'
    */
for (item in list) {
    console.log(item);
    console.log(list[item])
}

//           012345
let myname = 'dwiGht';

let propcase;

for (let i = 0; i <= myname.length - 1; i++) {
    // code here  

    if (i === 0) {
        propcase = myname[i].toUpperCase(); // prop case = 'd' 
    } else {
        propcase += myname[i].toLowerCase(); // 'd'  + 'w' ='dw'
    }
}
console.log(propcase);

// for in version 
let myname = 'dwIght'

let propcase;

for (index in myname) {
    index == 0 ? propcase = myname[index].toUpperCase() : propcase += myname[index].toLowerCase()
}
console.log(propcase);

/*
 for of loop 

 in order to run for of loop , the 'thing' must be numbered an array 
*/
//error
//let myobject = {
//    string: 'peter', 
//    boolean: true,
//    number: 1
//};
//for (item of myobject){
//    console.log(item);
//}

let indexarray = ['spot 1', 2, true, 'not fifth']

for (let pos of indexarray) {
    console.log(pos, 'was run through a "for of" loop');

}

/*
for(variable of iterables) {
    code goes here
}

* an interable is something that has numbers asigned to it like an array, where the first item is assigned a 0, the second a 1, and so on.... (eg. array, strings)
*/

let officecharacters = ['dwight', 'michael', 'jim', 'stanley', 'pam'];

for (worker of officecharacters) {
    if (worker === 'dwight' || worker === 'michael') {
        console.log(worker, 'works too much in the office.');
    }
    if (worker === 'jim' && worker !== 'dwight') {
        console.log('bear, beets, battlestar galactica');
    }
}

// wrtie a for loop that counts from 1 to 100 
/*
for numbers that are evenly divisible by 3, print: 'fizz'
for numbers that are evenly divisible by 5 print: 'buzz'
for numbers that are evenly divisible by 5 and 3 print: 'fizz buzz'

*/

for (let i = 0; i <= 100; i++) {
    console.log(i)
    if (i % 3 == 0) {
        console.log('fizz')
    }
    if (i % 5 == 0) {
        console.log('buzz')
    }
}

// jeromes way 

for (let l = 0; l <= 100; l++) {
    if (l % 15 == 0) {
        console.log('fizz buzz');
    } else if (l % 3 == 0) {
        console.log('fizz');
    } else if (l % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(l);
    }

}

for (let i = 0; i <= 100; i++) {
    if (i % 6 == 0 && i % 8 == 0) {
        console.log('Fizz Buzz')
    }
    else if (i % 6 == 0) {
        console.log('Fizz')
    }
    else if (i % 8 == 0) {
        console.log('Buzz')
    }
} else {
    console.log(i);
}
}




let library = {
    name: 'string i guess',
    address: 'strings in there',
    sections: {
        collections: [
            {
                classification: 'one',
                count: 2
            aisle: 'value for it'
            },
            {,
             }
                classification: 'two',
    count: 3,
    aisle: 'value for it'
{
		]
	}
}
console.log(library)
console.log(library.sections.collections)