// Arrays Challenge
// Arrays of Numbers
// Create an array with five decimal numbers, and use it for the following:
//
// Create a function that finds the highest number.
//
// highestNumber([1,4,2]) should return 4
// highestNumber([-1,-2,-4]) should return -1
// Hint: create a variable called max, and assign it a reasonable start value; then use forEach: if an element is higher than max, change max.
// Create a function that finds the lowest number.
var aa = [-5, -2.8, -7, -9, -10]
var newArray1 = aa.sort((a, b)=> a-b)
console.log(newArray1[aa.length-1])
console.log(newArray1[0])
console.log(newArray1)

// var bb = [5, 2.8, -7, 9, -10]
// var newArray2 = bb.sort((a, b)=> a-b)
// console.log(newArray2[bb.length-1])
// console.log(newArray2[0])

// function highestNumber(val) {
//   var max = val[0]
//   for(let i = 0; i < val.length; i++) {
//     if(val[i] > max) {
//       max = val[i]
//     }
//   }
// //
// // var newArray = a.filter(v => )
//
//   return max
// }
//
// console.log(highestNumber(a))
// lowestNumber([1,4,2]) should return 1
// lowestNumber([-1,-2,-4]) should return -4
// Create a function that finds the smallest number (the closest to zero).
//
// smallestNumber([1,4,2]) should return 1
// smallestNumber([0.1,0.01,0.001]) should return 0.001
// smallestNumber([-1,-2,-4]) should return -1
// smallestNumber([0.1,-0.001]) should return -0.001
// Create a function that calculate the sum.
//
// sum([1,2,3]) should return 6
// sum([]) should return 0
// Create a function that calculate the mean value.
//
// mean([1,2,3]) should return 2
// Create a function that finds the index of the highest number.
//
// indexHighestNumber([1,4,2]) should return 1
// indexHighestNumber([-1,-2,-4]) should return 0
// Arrays of Strings
// Create an array with your siblings names, and an array with your parents names.
//
// Sort your siblings names in alphabetical order.
//
// Sort your parents names in reverse alphabetical order.
//
// Sort all the names in alphabetical order.
//
// Hint: Combine the arrays into a single array.
// Sort all the names in reverse alphabetical order.
//
// Create a function that determines if a given name is amongst the names.
//
// Advanced Functions
// Create a function that returns an array with only the even elements from the array.
//
// evenElements([1,2,3,4]) should return [2,4]
// Hint: use the % operator
// What happens if there are no even numbers?
// Create a function that returns an array with only the odd elements from the array.
//
// oddElements([1,2,3,4]) should return [1,3]
// oddElements([2,2,6,4]) should return []
// Resources
//
//
// Arrays Explained
