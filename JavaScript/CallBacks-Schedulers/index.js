// WHat is CallBack Function

// A callback is function that is Passed as An Argument to another function is Callback

// function displayWord(){
//   console.log("function 1");
// }

// displayWord(function(){
//   console.log("function 2 ");
// })

// function displayWord2(displayName) {
//   console.log(displayName)
// }

// function displayWord3() {
//   console.log("Venkat");
// }

// displayWord2(displayWord3());

// const displayName = function(){
//   console.log("ram")
// }

// displayWord2(displayName)

// Shedulers - scheduler are used to schedule the exection of callback function

/* -- setInterval()
   -- clearInterval()

   -- setTimeout() 
   -- clearTimeout()

*/

// // -- setInterval() - run function specfied interval of time repeated

// let counter = 0;

// // let uniqueId = setInterval(function(){
// //   console.log(counter);
// //   counter = counter + 1
// // },1000)

// // clearInterval(uniqueId);

// // -- setTimeout() - run function specfied after time

// let uniqueId = setTimeout(function(){

//   counter = counter + 2
//   console.log(counter);
// },3000)

// clearTimeout(uniqueId)

// Event Listeners

// Dom Button - click

// HTML - CSS [ 3 ]
// JS - HTML [ 3 ]

/* 
  - INLINE - 
  - INTERNAL  - onevent listeners
  - EXTERNAL  - Modern Approach
*/

// FETCH() METHOD GET RESOURCES ACROSS INTERNET

// Syntax - fetch(URL,OPTION)

// JS PROMISES

/*
  - Exection 
    - Synchronous Extection 
      - JS LINE BY LINE [ Def]
    - Asynchronous Ex
      - IT WILL NOT WAIT 

*/

// console.log(fetch("https://gorest.co.in/public-api/users"));
// console.log("AFTER");

// Promises is Way to Handle Asynchronous Ex
  /*
    - Pending 
    - Fulfilled

    - Rejected 
  */

// then catch [ old way ]
// Promise Chaining
// fetch("https://gorest.co.in/public-api/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (e) {
//     console.log(e);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



// Async / await [ New Way ]
async function a() {
  try {
    console.log("Before");
    let response = await fetch("https://gorest.co.in/public-api/users");
    console.log(await response.json());
    console.log("after");
  } catch (error) {
    console.log(error);
  }
}

a();

// then catch [ old way ] --> Async / await [ New Way ]
