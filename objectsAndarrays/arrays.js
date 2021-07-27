/*

-populating and referring
-methods
-length
-iterating
*/

// populating and referring 
//           0          1        2
let list = ['orange', 'banana', 'oreos'];
console.log(list[1])
/*
-when we call an array, we can append, or add, square brackets onto the end of the aray name with the index number of the balue we want to reference.
this is known as square bracket notation
-java starts counting at 0, so when we console log 'list[1]' we should see 'banana'
*/

/*
let students = {
    0: 'evan', 
    1: 'ricky',
    2: 'kali',
    ....
}
*/

let students = ['evan', 'ricky', 'kali', 'richard', 'matthew', 'cameron', 'phoenix',25, true, ['matthew', 'shake n bake', 'sophie'], 15 % 5]
console.log(students[10])
console.log(typeof students);
console.log(students instanceof Array); //true
// console.log(students instanceof array); //  array is not defined
// the instanceof oporator is used to check the type of an object at run time. remember arrays are technicall objects


/*
CHALLENGE

console.log from the students array
-the name matthew (the first one )
-the number 25
-the phrase 'shake n bake'
-print out 'hello sophie'

*/
let students = ['evan', 'ricky', 'kali', 'richard', 'matthew', 'cameron', 'phoenix',25, true, ['matthew', 'shake n bake', 'sophie'], 15 % 5]
console.log(students[4])
console.log(students[7])
console.log(students [9][1])
console.log(students [9][2])
console.log(`hello ${students[9][2]}`)
console.log('hello', students[9][2]) // console log 2 things
console.log('hello' + students [9][2]) // concatinate


// array methods 
// we can call on multiple different array methods that wil allow us to manipulate arraus as we need to.

let food = ['pecan pie', 'shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

// add to our array
food.push('pizza'); // push will add a value to the end of the array......adding  muliitple values seperated by a comma 
// console.log(food.push('spring onion')) // gives me the length of the array
console.log('push:', food)

//remove from array
food.pop; // should remove the last item from the array
console.log('pop:', food);

food.shift(); // remove the first item in the array
console.log('shift:', food);

food.unshift('chicken', 'garlic'); //adding items to the begining 
console.log('unshift:', food)

food.splice(2,2,'bananas') // remove and insert items in an array
// (position to remov, how many to remove, what to add in that location)
console.log('splice:', food);

food.splice(1,0, 'ice cream');
console.log('second splice:', food); // insert ice cream into position 1

// length 

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length); //11

let colors = ['blue', 'green', 'yellow', 'red', 'orange','purple'];
console.log(colors.length); // 6 colors 

/*
            ITERATING
    foreach-
    -method executes a provided funciton once for each element in an array 
    - the foreach() method does the same thing as a for loop or a for of loop --- both iterate over the properties in an array 

    - provide a callback funciton that hasa up to 3 arguments
    1. the value
    2. the index
    3. the array object itself  
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for(let i = 0; i < colorList.length; i++){
    console.log(colorList[i]);
}

colorList.forEach(color => console.log(color))
// callback function 
//a callback funtion is a function that is either called on passsed as a parameter to another function 
// how do i make an arrow function?
let soemthing = (color)=> {//code in here}

    let logItem = item => console.log(item);
    colorList.forEach(logItem);

    let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

    colorList.forEach((item, index) => {
        console.log(item); 
        console.log(index);
    } )