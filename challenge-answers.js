//Reverse an Array problem 1 Answer
const sentence = ['sense.', 'make','all', 'will', 'This']

function reverseArray(initArray) {
    let arrayElement = [];
    for(let i = initArray.length-1; i >= 0 ; i--){
        arrayElement.push(initArray[i])
    }
    return arrayElement
}
reverseArray(sentence)
//End of Reverse Array problem 1 Answer

//Greet Aliens Problem 2 Answer

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

function greetAliens(aliensArray){
    for(let alien of aliensArray){
       console.log(`Oh powerful ${alien}, we humans offer our unconditional surrender!\n`)
    }
}
//greetAliens(aliens) --Call

//End of Greet Aliens Problem 2 Answer

//convertToBaby Problem 3 Answer
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human']
const babyAnimals = []
function convertToBaby(animalsArray){
    for(let animal of animalsArray){
        babyAnimals.push(`baby ${animal}`)
    }
    return babyAnimals
}
convertToBaby(animals)
//End of convertToBaby Problem 3 Answer

//