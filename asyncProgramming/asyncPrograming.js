/*
! asynchronous programming 
---- generally  JS is read from top to bottom, preforming each line of code one after another - this is known as synchronous programming. 
- ex line 1 is run and completed before line 2 begins. which is then run and completed before line 3 ...etc

- this can become an issue when we fetch, or gather, information from an outside source , from something such as an api. if JS did not have the ability to run code asynchronously, 
we would be fouced to wait for our line of code to finish as it tried to gather moutains of data from a database. 
asyncrounous code will allow us to somewhat ignore the one line at a time rule. 

- asynchrounous programming allows a program to do more than one thing at a time.

- makes it possible to run long-running actions without stopping the program to wait for a response. 

*/

// synchorounous code 
const secondSync = () => {
    console.log('second hello');
}
const firstsync = () => {
    console.log('first hello');
    secondSync();
    console.log('end')
}

firstsync();

/*
            AYSNCHRONOUS CODE 
*/
const networkRequest = () => {
    setTimeout(() => {
        // setTimeout is a method that will work in the browser and node. 
        //JS - we are using it to simulate a network request.
        //setTimeout has 2 parameters, the first is a callback function (a function that we pass into a parameter), and the second is how time to wait measured in milliseconds
        console.log('async code');
    },2000)
}

    console.log('hello world');

    networkRequest();

    console.log('the end');


    /*
        !!!!! API

    - application program interface
    - - an API is somethng that will allow us to talk to other programs, such as a database or a server. however the API itself it not a database or server. 
    -it is the code wit access points to the server.
    
    - the access to a server, will come in the form of ENDPOINTS 
    - these ENDPOINTS direct us to sets of data. 

    REST API 
        - REpresentational state transfer
        - Creates an object of requested data form the client, and sends balues back as a repsonse 

        Methods : 
        CRUD
        create (POST)
        READ (GET)
        UPDATE (PUT)
        DELETE (DELETE)
        // WE WILL TALK MORE ABOUT THESE IN DETAIL DURING BLUE BADGE,

        !!! FETCH 
        The fetch method is an asynchronous method, and is part of the browser window, NOT JS. this method will start the process of 'fetching', or grabbing, a resource from the 
        network, and will return a promise which is fulfilled when the response is available.

        - promise is an unknown value that will eventually be filled with either a value or a rejection (error)
        - pending: initial state, neithr fulfilled or rejected 
        - fulfilled: meaning the operation completed successfully (a login accesing your account or loging in but wrong password is still a fulfillment)
        - Rejected: meaning the operation failed. (trying to login but internet failed would be an example of a rejection)

        









    */

