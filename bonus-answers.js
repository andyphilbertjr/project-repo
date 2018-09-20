//Bonus Code Challenges 

//sort Years Problem 8
const yearsArray = [ 1899, 2012, 1960, 1954, 2018 ]

const sortYears = (yrArray) => yrArray.sort(( a, b ) => a - b)
sortYears(yearsArray).reverse()

//console.log(yearsArray)

//End of Problem 8

//just cool stuff Problem 9
let arr1 = ['this', 'not this', 'nor this']
let arr2 = ['thing 1', 'thing 2', 'this']

function justCoolStuff(array1, array2){
  return array1.filter( item => array2.includes(item) )
}
//console.log(justCoolStuff(arr1, arr2))

//End of Problem 9

// is the dinner vegan Problem 10
const meals = [
              {name: 'arugula', source: 'plant'},
              {name: 'tomatoes', source: 'plant'},
              {name: 'lemon', source:'plant'}, 
              {name: 'olive oil', source: 'plant'}
            ]
const isTheDinnerVegan = (mealArray) => {
  return mealArray.every( meal => meal.source === 'plant')
}
//console.log(isTheDinnerVegan(meals))

// End of Problem 10 

//dogFactory Problem 11 
const dogFactory = (name = '', breed = '', weight = Number) => {
  return {
          name: name, 
          breed: breed,
          weight: weight
        }
}
//console.log(dogFactory('Joe', 'Pug', 27))

//end of problem 11 
