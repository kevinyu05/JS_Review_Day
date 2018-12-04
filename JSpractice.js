// One person from your pair start a github repo called JSreviewday -follow directions on github workflow document “I’m just starting a new project.”
//
// Plan out strategy and pseudo code first.  Leave stretch goals for when you finish all base challenges.
//
// Try without Googling first.  Then only google ideas or methods not the actual challenge.

//Create a function that takes in a word and returns whether or not the word is a palindrome (same forward and backward).

//Hint:
//you do not need any loops

// var testWord1 = "level"
// //expected output = “no nomad is not a palindrome”
// // console.log(testWord1.split().reverse().join())
// //create a function that will determine if the element is a palindrome or not
// function findPal(str) {
// //initialize a variable which will hold testword1 and put it into an array and reverse the order
// var str1 = str.split("").reverse().join("")
//
// //create an if statement that returns whether or not the word is a palindrome or not
//   if(str === str1) {
//     console.log(str + " is a palindrome")
//   } else {
//     console.log(str + " is not a palindrome")
//   }
// }
//
// findPal(testWord1)
// // STRETCH: copy / paste and refactor to account for sentences and capital letters. Do not worry about punctuation.
//
//
// var testSentence1 = "Nomad DaMon"
//
// // expected output:  "yes Nomad DaMon is a palindrome"
//
//


//Write a function that takes in two arrays (of numbers) and checks for duplicates.  The function should output a new array without duplicates

// hint: you will need a loop
// hint: use the .includes() method

var a = [1, 2, 3, 30, 17];
var b = [2, 30, 1, 15 ];
//expected output [1, 2, 3, 30, 17, 15]

function dup (arr1, arr2) {
  var newArr = []
  var joinedArr = arr1.concat(arr2)
  // console.log(joinedArr)
  joinedArr.forEach(function(el) {
    if(!newArr.includes(el)) {

    }
  })
}

dup(a, b)
// STRETCH:  copy/paste and refactor function to take in more than two arrays.
//
// var a = [1, 2, 3, 30, 17];
// var b = [2, 30, 1, 15, ];
// var c = [2, 10, 19, 1, 3]
// var d = [1, 3, 40, 32, 3]
// //expected output [3, 17, 15, 10, 19, 40, 32]
//
//
//
//
//
//
// //Create a function that takes in a sentence and returns only the consonants (removes the vowels).
//
// // hint: you will need a loop
// // hint: use the .includes() method
//
// var testSentence1 = “This website is awesome!”
// //expected output = “Ths wbst s wsm!”
