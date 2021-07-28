const baseUrl = "https://api.spacexdata.com/v2/rockets";

const serachForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); // gets the first ul tag ( the first tag/class/id combo we give it in the string)

serachForm.addEventListener('submit', fetchSpace)

// hoistin mini lesson !!!!!!!!!!!!!!!
// JS will compile code reading from top to bottom, BUT it actually reads code twice. the first time it reads code, it will store anything in memory such as : variable names, 
// functions (when using the keyword)
// console.log(fetchspace(1)) // hoisting a function 
// console.log(myvar1); // error: cannot access before initialization 
// console.log(myvar2); // undefined
// myfunc() // error: cannot access before initilization 

// let myvar1 = 'awesome'
// let myvar2 = 'not awesome'

// let myFunc = () => {console.log('arrow test')}

function fetchSpace(e) {
    e.preventDefault(); // this will stop the page from reloading when we submit our form , it prevents a default action by the browser. 

    console.log('clicked!');

    fetch(baseUrl) // starts the process of 'fetching' or getting information from our resource 
        //.then(/* function goes here*/)
        .then(result => { // when we have a promise, we can call a method called ' then ()'. this will be gien a callback funtion to send the result into 
           // console.log(result);
            return result.json(); // this will json-ify, or translate our result in json, which will be more easily readable andaccessible within our app. 
        }) // .then() also returns a promise, meaning if we want to continue to ru ncode after one is done, we can just add another then()
        .then(json => {
           // console.log(json);
           displayRockets(json);
        })
}

function displayRockets(data) { 
    console.log('inside displayRockets:', data)

    // how we can get each rocket's name to show up in the ul 
    //or
    // how we can get each rocke't name to show up in the console

    // for(let i = 0;  i < data.length; i++){}
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li'); // creates an empty <li></li> tag
        listItem.innerText = rocket.name; // change the text of the item. the tag now looks like this: <li>rocket name</li>
         spaceShips.appendChild(listItem) // this will add one of our tags into another tag. in this case we are adding listItem into the ul  (spaceShips)

         /* container.appendchild(itemInContainer)*/
    })
}