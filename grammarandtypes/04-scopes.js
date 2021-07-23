/*
SCOPE

what is scope?

- scope is how a computer keeps track of all of it's variables in a program 
- scope can be nested, where there is an outer scope that encloses an inner scope
*/

let scope = 'earth'; // globally scoped variable, think of this as the 'earth' level 

let getfromglobal = 'the moon!';

if(true){
    let scope = 'indiana'; // locally scoped variable, think of this as the 'state level'
    console.log(scope, 'marks the local scope');

    let kindalocal = 'noblesville';

    if(true) {
        let scope = 'indianapolis'; // local scope inside of a local scope ('city' level)
        console.log(scope, 'is the capital of indiana.');

        let anotherscope = 'hello from indianapolis'

        console.log(`while looking outside of my very local area, i went to ${kindalocal} at night and sae ${getfromglobal}`);
    }
    console.log(scope, 'should be the closest to indianapolis')
}

console.log(anotherscope);

/*
LET VS. VAR 
 
var and let seem to operate teh same way, but while do have have a lot of the same functionality (both let us declare and initialize bariables), they behave differently 
- var is scoped to the nerest function block
- let is scoped to the nearest enclosing block

*/
