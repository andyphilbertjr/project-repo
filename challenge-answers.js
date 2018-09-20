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
//greetAliens(aliens) 

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
//console.log(convertToBaby(animals))

//End of convertToBaby Problem 3 Answer

// Fix the broken code Problem 4
const numbers = [5, 3, 9, 30];

 const smallestPower = (numArray, i = 1) => {
   return numArray.map((number) => {
        while(i < number){ i = i * 2};
        return i
     })
 }

 //console.log(smallestPower(numbers)) 
 
 //End fo Problem 4 

 //Decline and Except Everything Problem 5 Part 1
 const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

 const politelyDecline = (veg) => {
       console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
 }
 const declineEverything = (vegArray) => vegArray.forEach(veggie => politelyDecline(veggie))
 //declineEverything(veggies)

 //End of Part 1 
 
 //Accepts everything Problem 5 Part 2
 const acceptsEverything = (vegArray) => vegArray
 .map(veg => console.log(`Ok, I guess I will eat some ${veg}.`))
// acceptsEverything(veggies)

//End of Part 2

// square Nums problem 6
const numArray = [2, 7, 9, 171, 52, 33, 14]

const squareNums = numbers => numbers.map( number => number * number)
//console.log(squareNums(numArray))

//End of Problem 6

//shout Greetings Problem 7
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
const shoutGreetings = (greetingsArray) => greetingsArray
.map( greetingUpper => greetingUpper.toUpperCase() )
//console.log(shoutGreetings(greetings))

//End of Problem 7 


