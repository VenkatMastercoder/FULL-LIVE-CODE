// Array Method 
//  - map 
//  - filter 

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.map((e)=>{
//   console.log(e*e)
// })

// let arr1 = [1,2,3,4,5,6,7,8,9];

// arr1.map((e)=>{
//   console.log(e)
// })

// function a(Parameter) {
//   console.log(Parameter)
//   console.log("normal function")
// }

// a("as");

// let a2 = (Parameter) => {
//   console.log(Parameter)
//   console.log("Arrow function")
// }

// a2("ds")

let newArr = [1,2,3]
// {
//   return
// }

let a11 =  newArr.filter((e)=> e > 0)

// console.log(a11)


let a12 =  newArr.reduce((initalValue,finalValue)=> initalValue+finalValue)

console.log(a12)