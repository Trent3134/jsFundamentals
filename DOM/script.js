console.log('hello from the script file!')

//  !1
console.log(document);
console.log(document.body);
// using console.dir() to see the properties of the object insteaad of the html tag 
console.dir(document.getElementById('testparagraph'));
console.log(document.getElementById('testparagraph'));
// document.getElementById('testparagraph').style.color = '#2b2b2b'; 

let testpara = document.getElementById('testparagraph');
testpara.style.color = '#434c8c'
testpara.style.backgroundColor = '#815'

// this method wil reach out to the html page and grab the first html elemennt with the specific id passed into the method (in this case, test paragraph). 
//this is important to know because if you have 2 elements with the same id, you will only get the first, though you usally will not have 2 elements with the same id 

// !! 2  querySelectorAll & inner Text/innerhtml

//document.querySelectorAll('sampleClass') 
console.log(document.querySelectorAll('.sampleClass'));
// gives us an array of all items with the class 'sampleClass' in a 'NODELIST"

console.log(document.querySelectorAll('p.sampleClass'))
// gives us an array with ONLY p tags that have the class 'sampleClass'

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!';
// we use [] to select an index form the array, even if there's only one lement. innerText just references or changes the text inside of the element. 

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has been changed using a forEach () method!';
   // pTag.textContent = 'My text has been changed using a forEach () method!';
    pTag.innerHtml = 'My text has been changed using a forEach () method!';

});

/*
INNERTEXT BS INNERHTML VS TEXTCONTENT 
- innerText will simply reference or allow us to change the text of a specified element. will reuturn visible text in a 'node'

- textContent does teh same thing that innferText does, but will return the FULL text of a 'node'

- innerHtml allows us to set text as well as HTML elements we are referencing. 
*/

console.log(document.getElementById('spanTest').innerText);
console.log(document.getElementById('spanTest').textContent);
console.log(document.getElementById('spanTest').innerHtml);

// !!! addEventListener ()

document.getElementById('clickThis').addEventListener('click',function(event) {
   //no i can write code 
  // console.log(event.);
   console.log(event.target);
   event.target.style.backgroundColor = '#031bf3'
})

// ! addEventListener - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    // console.log(e.target)
    console.log(e.target.value)
    // console.log(document.getElementsByTagName('p'))
    document.getElementsByTagName('p')[0].innerText = 'something has changed!'

    if(e.target.value === ''){
        document.getElementsByTagName('p')[1]. innerText = 'nothing has been typed...';
    } else{
        document.getElementsByTagName('p')[1]. innerText = `Everyone, say hello to ${e.target.value}`
    }
})
