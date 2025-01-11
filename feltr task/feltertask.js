// function cleanNames(names) {
//     return names.map(name => name.trim());
//   }
//   const result = cleanNames([" injustice", " SuperMan", "Batman ", " flash "]);
//   console.log(result);
  


//   ------------------------2------------------------


// function toKm(miles) {
 
//     const kmArray = miles.map(mile => mile * 1.60934);
  
    
//     const totalDistanceInKilometers = kmArray.reduce((acc, curr) => acc + curr, 0);
  
//     return totalDistanceInKilometers;
//   }
  
 
//   const miles = [10, 20, 30, 40];
//   const totalDistance = toKm(miles);
//   console.log(totalDistance);

// ------------------------3------------------------
function squareAndSum(arr) {
    const sumOfSquares = arr.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
    const average = sumOfSquares / arr.length;
    return average;
  }


  const array = [1, 2, 3, 4, 5];
  const result = squareAndSum(array);
  console.log(result);
  


//   ----------------------------4-------------------

// function plusFour(arr) {
//     return arr.map(num => num + 4);
//   }
//   const numbers = [1, 2, 3, 4, 5];
//   const plus4 = plusFour(numbers);
//   console.log(plus4);
//   ---------------------5555------------
// function evenDoubleEvenSum(arr) {
   
//     const evenDoubleEvenNumbers = arr.filter(num => num % 2 === 0 && num % 4 === 0);
  
//     const sum = evenDoubleEvenNumbers.reduce((acc, curr) => acc + curr, 0);
  
//     return sum;
//   }
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 20];
//   const evenDoubleEven = evenDoubleEvenSum(numbers);
//   console.log(evenDoubleEven); 


//   ---------------------------------666------------
// function convertToUpperCase(arr) {
    
//     return arr.map(word => word.toUpperCase());
//   }
  
//   const words = ['apple', 'banana', 'cherry', 'date'];
//   const upperCaseWords = convertToUpperCase(words);
//   console.log(upperCaseWords); 
//   --------------------7--------------
// const heros = [
//     {name: 'Iron Man', power: 'Tech'},
//     {name: 'Spider-Man', power: 'Spider abilities'},
//     {name: 'Thor', power: 'Godly powers'},
//     {name: 'Hulk', power: 'Super strength'}
//   ];
  
//   const newHeros = heros.map((hero, index) => {
//     return {
//       hero: hero.name,      
//       power: hero.power,     
//       id: index           
//     };
//   });
  
//   console.log(newHeros);
//   ----------------88------------------

// function filterWords(inputWords) {
   
//     return inputWords.filter(word => word.length > 7);
//   }
 
//   const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
//   const output = filterWords(inputWords);
//   console.log(output); 

// //   -----------------------99
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers); 


// const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
// console.log(divisibleBy2or5); 


// const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
// console.log(divisibleBy3Squared);

// const sumSquaredDivisibleBy5 = numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
// console.log(sumSquaredDivisibleBy5); 

// ------------10------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); 

 
const divisibleBy2or5 = numbers.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divisibleBy2or5); 

const divisibleBy3Squared = numbers.filter(num => num % 3 === 0).map(num => num ** 2);
console.log(divisibleBy3Squared); 

const sumSquaredDivisibleBy5 = numbers.filter(num => num % 5 === 0).map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
console.log(sumSquaredDivisibleBy5); // 62



  