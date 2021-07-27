/*
OBJECTS 
- used to store multiple sets of data in the key/value pain format 
-denoted by {}

*/

let netflix = {
    //name: value 
    id: 1,
    name: 'the office',
    genre: 'comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    episode: 1,
                    episodeName: 'pilot'
                },
                {
                    episode: 2,
                    episodeName: 'diversity day'
                },
                {

                    episode: 3,
                    episodeName: 'health care'
                },
                {

                    episode: 4,
                    episodeName: 'the allicance'
                },
                {

                    episode: 5,
                    episodeName: 'basketball'
                },
                {

                    episode: 6,
                    episodeName: 'hot girl'
                }


            ]
        }
    }
}

// console.log(netflix.name, netflix.genre); //dot notation: when we know the name of the key/value information we want, we will use dot notation. 

console.log(netflix);

console.log('just season info:', netflix.season1.seasonInfo);

// challenge- console log any single episode name from season 1

console.log('episode 2:', netflix.season1.seasonInfo.episodeInfo[1].episodeName);

/*
JSON OBJECT!!!
-JSON stands for java script object notation 
- the JSON syntax i sderived from javascript object syntax, but the JSON format is text only
- JSON exists as a string- useful when fetching data from a server. it needs to be translated into a native javascript object if we want to acces the data

*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// we can use some object methods to help us gather information we might not otherwise know
//object.keys()
console.log(Object.keys(spaceJam.toonSquad)) //give an array of the keys in an object
console.log(Object.keys(spaceJam.toonSquad.duck)); // gives us the index numbers for the string 'daffy duck'
console.log(Object.values(spaceJam.toonSquad)); // gives us an array with the values of each key in an object

/*
    OBJECT BRACKET NOTATION 
    -allows us to find a value in an object we wouldn't be able to access using dot notation 
    -we can also use object bracket notation to store additional information into a key in a bariable and use that bariable to access information in an object
    -this works because all keys in an object are strings

*/

let garden = {
    vegetable: 'zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden)
console.log(test)
console.log(typeof test [0])

// dot notation 
console.log(garden.flower)

// square bracket notation 
console.log(garden['flower'])

let baking = {};
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60; 
//console.log(baking)


let garden = {
    vegetable: 'zucchini',
    flower: 'orchid',
    fruit: 'kiwi',
    water: true,
    sun: true,
    size: 10
}

//console.log(baking[garden['vegetable']]);
console.log(baking[garden['vegetable']]);

// using square brackets can also be a good idea if the object's key has a space in the name

let testObj = {
    'spaces here': true,
    noSpaces: true
}
// if there is a space in the key name you must put in square bracket not
console.log(testObj.noSpaces);
console.log(testObj['spaces here']);
