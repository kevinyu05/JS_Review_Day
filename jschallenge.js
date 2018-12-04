// One person from your pair start a github repo called JSreviewday -follow directions on github workflow document “I’m just starting a new project.”
// Plan out strategy and pseudo code first.  Leave stretch goals for when you finish all base challenges.
// Try without Googling first.  Then only google ideas or methods not the actual challenge.
//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).

//Hint:
//you do not need any loops
//expected output = “no nomad is not a palindrome”

// console.log();
// var testWord1 = "levels"
//
// // create function to reverse string
// function reverseString(str) {
//   //change the string into an array
//   //reverse the array
//   // //join the array to a string
//   var str1 = str.split("").reverse().join("")
//
//   if(str === str1) {
//     console.log(str + " is a palindrone")
//   } else {
//     console.log(str + " is not a palindrone")
//   }
// }
// reverseString(testWord1)


// STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
// var testSentence1 = "Nomad DaMon"
// // expected output:  "yes Nomad DaMon is a palindrome"
var testWord1 = "A Toyota! Race fast, safe car! A Toyota!"

// create function to reverse string
function reverseString(str) {
  var filter = /[A-z]/
  var array1 = str.split("")
  var newArrayResults= []
  // for(let i = 0; i < array1.length; i++) {
  //   if(filter.test(array1[i])) {
  //     newArrayResults.push(array1[i])
  //   }
  // }
 array1.forEach(function(el){
   if(filter.test(el)) {
     newArrayResults.push(el)
   }
 })

  if(newArrayResults.reverse().join("").toLowerCase() === newArrayResults.join("").toLowerCase()) {
    console.log(str + " is a palindrone")
  } else {
    console.log(str + " is not a palindrone")
  }
}
reverseString(testWord1)
console.log();
// //Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates

// // hint: you will need a loop
// // hint: use the .includes() method
//
var a = [1, 2, 3, 30, 17];
var b = [2, 30, 1, 15];
// //expected output [1, 3, 2,  17, 15]

// function duplicateArray(arr1, arr2) {
//   var arr3 = arr1
//   var k = 0
//   for(let i = 0; i < arr2.length; i++) {
//
//     for(let j = 0; j < arr3.length; j++) {
//       console.log("b:"+ arr2[i] +" === " +"a:" +arr3[j] + ", k: " + k);
//       if (arr2[i] === arr3[j]) {
//         k++
//       }
//     }
//
//     if(k === 0) {
//       arr3.push(arr2[i])
//     }
//     k = 0;
//     console.log("");
//   }
//
//   return arr3
// }
// console.log(duplicateArray(a, b))


function duplicateArray(arr1, arr2) {
  var arr3 = arr1
  for(let i = 0; i < arr2.length; i++) {
    if(!arr3.includes(arr2[i])) {
      arr3.push(arr2[i])
    }

  return arr3
  }
}
console.log(duplicateArray(a, b))

console.log();
// STRETCH:  copy/paste and refactor function to take in more than two arrays.

var a = [1, 2, 3, 30, 17];
var b = [2, 30, 1, 15];
var c = [2, 10, 19, 1, 3]
var d = [1, 3, 40, 32, 3]
// //expected output [3, 17, 15, 10, 19, 40, 32]
function duplicateMultiArray(arr1, arr2, arr3, arr4) {
  var newArray = arr1
  for(let i = 0; i < arr2.length; i++) {
    if(!newArray.includes(arr2[i])) {
      newArray.push(arr2[i])
    }
  }

  for(let i = 0; i < arr3.length; i++) {
    if(!newArray.includes(arr3[i])) {
      newArray.push(arr3[i])
    }
  }
  for(let i = 0; i < arr4.length; i++) {
    if(!newArray.includes(arr4[i])) {
      newArray.push(arr4[i])
    }
  }
  return newArray
}

console.log(duplicateMultiArray(a, b, c, d))
console.log();
// //Create a function that takes in a sentence and returns only the consonants (removes the vowels).
//
// // hint: you will need a loop
// // hint: use the .includes() method
//
var testSentence1 = "This website is awesome!"

function removeVowels(str) {
  var newArray = str.split("")
  var vowels = ["a", "e", "i", "o", "u"]
  var noVowelArray =[]
  for(let i = 0; i < newArray.length; i++) {
    if(!vowels.includes(newArray[i])) {
      noVowelArray.push(newArray[i])
    }
  }
return console.log(noVowelArray.join(""))
}

removeVowels(testSentence1)
console.log();
// //expected output = “Ths wbst s wsm!”
