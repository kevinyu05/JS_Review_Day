// // .map() vs .filter()
// .map() is when you need to do something to every item in an array
// .map(value, index, arr)
// emtpy array
// loop
// push
// returns new array
//
// or
//
// .map(function)
//
// .filter(value, index, arr)
// emtpy array
// loop
// push
// returns new array
//
// or
//
// .filter(function)

// // .map(value, index, arr)

// mult each item in the array by 3, output a new array
var arr = [5, 3, 7, 10]

// // expected output [15, 9, 21, 30]
//
//Here's what we we need to do if we use for loop
// var empty = []
//
// for (let i = 0; i < arr.length; i++){
//     empty.push(arr[i] * 3)
// }


// var empty = arr.map(function (v) {
//     return v * 3
// })

// console.log(empty);

// var arr = [5, 3, 7, 10]
//
// // var empty = arr.map(value => value * 3)
// //
// // console.log(empty);
//
// function mult3(value1, value2){
//     return value * 3
// }
//
// var empty = arr.map(mult3)
//
// console.log(empty);

// var arr1 = [15, 3, 10, 30, 45, 19, 7]
//
// var arr2 = arr1.map(v => v/3)
//
// console.log(arr2);


// var arr1 = [15, 3, 10, 30, 45, 19, 7]
//
// var arr2 = arr1.filter(v => v % 3 === 0)
//
// console.log(arr2);



//
// //Here's the same task with .map()
// var arr = [5, 3, 7, 10]
// //
// // // let newArr = arr.map(function(value){
// // //     return value * 3
// // // })
//
// let newArr = arr.map(v => v * 3)
// //
// // function mult3(v){
// //     return v * 3
// // }
// //
// // let newArr = arr.map(mult3)
// //
// //
// console.log(newArr);
// returns new array
//
// .filter(value or function)
// returns new array

//return even numbers with for loop

// var arr = [3, 7, 2, 8, 10, 15]
// var newArr = []
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr);
//
//
// //return even numbers with filter()
// var arr = [3, 7, 2, 8, 10, 15]
//
// newArr = arr.filter(v => v % 2 === 0)
//
// console.log(newArr);
//
// // Consider this variable:
var toons = [{name: "Brian", animal: "dog"},
            {name: "Tom", animal: "duck"},
            {name: "Bugs", animal: "dog"},
            {name: "Brian", animal: "duck"},
            {name: "Felix", animal: "dog"},
            {name: "Tabby", animal: "cat"}]
// // Write a for loop that saves all dog characters to another array.

var dogFilter = toons.filter(val => val.name === "Brian").map(val => val.animal)


console.log(dogFilter);
// var dogs = []
//
// for(i=0; i < toons.length; i++){
//     if(toons[i].animal === "dog"){
//         dogs.push(toons[i])
//     }
// }

// console.log(dogs);

// var dogs = toons.filter(v => v.animal === "dog")
//
//
// console.log(dogs);
//
// // var names = dogs.map(v => {
// //     console.log(v.name)
// //     return v.name
// // })
//
// var names = dogs.map(v => v.name)
//
// console.log(names);



// var empty = []
//
// for (let i = 0; i < toons.length; i++){
//     if (toons[i].animal === "dog") {
//         empty.push(toons[i])
//     }
// }
//
// console.log(empty);
// // Exercise 6
// // Use filter on the toons array to save all dog characters to another array.
//
// let dogs = toons.filter(value => value.animal === "dog")
//
// console.log(dogs);



// //return only the letters at the even index (includes 0)
// var arr1 = [0, 1, 2, 3, 4]
// var arr = ["z", "t", "l", "b", "y"]
// // //expected output ["z", "l", "y"]
// var evenIndex = arr.filter(function(value, index) {
//   if(index % 2 === 0) {
//     return value
//   }
//   })
// console.log(evenIndex)
//
// var evenIndex2 = arr1.filter(value => value % 2 === 0)
// console.log(evenIndex2);
//







// // var newArr = arr.filter(function(value, index) {
// //     if(index % 2 === 0){
// //         return value
// //     }
// // })
//
// var newArr = arr.filter((value, index) => index % 2 === 0)
//
// // var newArr = arr.map(function(value, index){
// //     if(arr.indexOf(value) % 2 === 0){
// //     }
// // })
//
// console.log(newArr);
