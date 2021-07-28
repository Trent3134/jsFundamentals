/*
!!! ASYNC/ AWAIT

- allows us to program in a synchronous manner while stil allowing code to run in the background. 
- helps keep our sites responsive 

*/

// !!!  ASYNC FUNTION (SYNTAX)
// - allows us to make a normal function asynchronous: which means we can use await 
// - must use the asunc keuword at the beginning of the function declaration 

async function myfn(){
    await console.log('testing');
}
myfn() // testing

const myAsyncFn = async () => {
    await console.log('testing');
}
myAsyncFn() // testing 

const newFn = () => {
    await console.log('testing')
}
newFn() // error: await is only valid in an async function 

async function fn() {
    return 'hello';
}

fn().then(console.log)  // this will give us a promise of 'hello' returned => then console.log the value

// !! await 
// pauses an asun cfinction until a promise is settled (either resolved or rejected)

fetch('https://randome.dog/woof.json')
.then(result => result.json()) // takes in result and translates in into json 
.then(json => console.log(json)) // print that json in the console
.catch(error => console.log(error)) // print any errors that might happen

// using async
async function getwoof() {
    // first stop is going to be waiting for the fetch to get a response. 
const response = await fetch ('https://random.dog/woof.json')
    // second stop is waiting for the response to get traslated 
    const json = await response.json()

    return json; 
}

console.log(getwoof())
