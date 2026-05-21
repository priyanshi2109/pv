// import data from './new.js'
// console.log(data)

// import{data,add} from'./new.js'
// add(5,6)
// console.log(data)
// console.log("hello priyanshi");

//pure  function

// function double(num){
//     return num*2
// }
// consle.log(double(5));
// consle.log(double(5));
  // output will be same for same input


// impure function


// let count=0
// function increment(){
//     count++
//     return count
// }
// console.log(increment()) // 1
// console.log(increment()) //2
// console.log(increment()) //3
// output will be different for same input


// function sum(b){
//     return function(a){
//         //return b+a
//         return function(c){
//             return a +b+c
//         }
//     }
// }
// console.log(sum(5)(6)(7)) // 18

// function sum(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(6)(5)(5)()) //16


//spread operator (... array name)

// let arr = [1,2,3,4,5]
// let nums = [...arr,6,7,8]
// console.log(nums)

// rest parameter

// function sum(...args){

// function sum(a,b,c,...nums){

//     console.log(arguments) 
//     // console.log(nums) // remaining arguments in array form

//     // return a+b+c
// }
// sum(1,2,3,4,5,6,6,7,8)

//destructuring

 // in array and object we can use destructuring
 //->> in array 


// let arr = [1,2,3,4,5]
// // let a = arr[0]
// let [a,b,c] = arr 
// console.log(a,b,c)

// let a = arr[0]
//let b=arr[1]

//->> in object

// let obj={
//     name:"priyanshi",
//     age:19,
//     roll:1253
// }
// console.log(obj.name)
// console.log(obj.age)
// let{name,age} = obj
// console.log(name,age)

//jquery
// console.log($) 
// console.log($('#one').text("priyanshi"))
// $("h1").css("color","red")


$("#fadeIn").click(()=>{
  console.log("hello");
  $("#container").fadeOut();
})
$("#fadeOut").click(()=>{
  console.log("hello")
  $("#container").fadeIn()
})
$("#fadeToggle").click(()=>{
  console.log("hello")
  $("#container").fadeToggle()
})