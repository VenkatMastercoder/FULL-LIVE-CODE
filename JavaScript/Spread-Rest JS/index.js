// Spread Opertor

// - Unpack array , object , etc

// Spread with Array

// let arr1 = [2,3]
// let arr2 = [1,...arr1,4,...arr1]

// // copy
// let arr11 = [2,3]
// let arr12 = [...arr11]
// console.log(arr12)

// // concatenation
// let arr011 = [2,3]
// let arr012 = [4,5]
// let arr013 = [...arr011,...arr012]

// console.log(arr013)

// // object

// let person = {
//   name:"venkat",
//   age:1
// }

// let personDetails = {...person ,city:"chennai"}

// console.log(personDetails)

// // copy

// let personDetails1 = {...person}
// console.log(personDetails1)

// // concatenation

// let address = {
//   pincode:"60646846"
// }

// let newPresonDetails = {...person,...address}
// console.log(newPresonDetails)

// // function
// function add(a, b, c) {
//   // console.log(a+b+c)
// }

// let a = [1, 2, 3, 4, 5];

// add(...a);

// // Rest Parameter

// // - Pack

// function add(...arg) {
//   console.log(arg);
// }

// let a1 = [1, 2, 3, 4, 5];

// add(...a1);

// // Destructuring Object & Array  [ Destructing ON Fly ]

// // Array [ rest ]

// let [h, g, t, ...a8] = [1, 2, 3, 4, 5, 6];

// console.log(h);
// console.log(g);
// console.log(t);
// console.log(a8);

// // object

// let person = {
//   names: "venkat",
//   age: 1,
// };

// let { names,age } = person;

// console.log(names,age);

// // Spread
// function add(a, b, c) {
//   // console.log(a+b+c)
// }

// let Spread = [1, 2, 3, 4, 5];

// add(...Spread);

// // rest
// function add(a,b,...rest) {
//   console.log(a)
//   console.log(rest)
// }

// let rest = [1, 2, 3, 4, 5];

// add(...rest);

let { firstname, age, ...a } = {
  firstname: "venkat",
  age: 1,
  bat: "srger",
  cat: "bjodrnjo",
};

console.log(a);

// Template String 

let names = "venkat"
let n = 1

// `${}` 

console.log(`hi ${n+names}`)