// print - console.log("Hello World");

// Variables
// - var
// - let
// - const

// let message1;
// message1 = 10;
// message1 = "nldngff";

// var message2;
// message2 = 10;

// {
//  var a = 10 // global sc
//  let b = 20 // local sc
// //  console.log(b)
// }

// console.log(a);
// console.log(b);

// Const Example

// const a = 10;
// a = 20;

// console.log(a);

// var if = 10;

// let a = "kfkvdlrk";

/*
  multiline 
  line 1
  line 2
  line 3
  line 4
  line 5
*/

// let a = 5;
// let b = a++;
// console.log(a);
// console.log(b);

// let number = 10;
// var string = "nameshowMessage()";
// let bool = true;
// let a = null;

// method
// - typeof
// - string to number
// - random
// let string1  = '20'
// console.log(string1)
// console.log(typeof(string1))

// let number1 = parseInt(string1);
// console.log(typeof(number1))
// console.log(number1)

// console.log(Math.random())

// console.log(typeof(number),typeof(string),typeof(bool))

// console.log(number,string,bool,a)

// {
//   var num = 10  // gob
//   let num2 = 10 // loc
//   console.log(num2)
// }

// console.log(num)
// // console.log(num2)

// function
/*
  - function Declaration 
  - Function Expression 
  - Arrow Function 
  - An 
  - High Order Fuction 

*/

// function showMessage() {
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
// }

// ;

// let showMessage2 = function () {
//   console.log("Function 2");
// };

// showMessage2();

// function add(a, b) {
//   console.log("::", a + b);
// }

// add(1, 2);

// let a = true;

// if (a) {
//   console.log(a);
// } else {
//   console.log("false");
// }

// for(let i=1;i<10;i++){
//   console.log(i)
// }

// Array - order sequence of items [ diff datatype ]

/* 
  - Array - order sequence of items [ diff datatype ]
    - How to Creating an Array 
      - let myArray = [5,"one",5.5,true]
    - How to Access a Element in an Array
      - console.log(myArray[0])
    - How to Modify a Element in an Array
      - myArray[0] = 6
    - How to Find Length 
      - console.log(myArray.length) 
      - length :- 1 
      - index :- 0

    - Array Methods 
    - push() - add element into array at end - myArray.push(6)
    - pop() - remove the element at last - myArray.pop()
 */

// let myArray = [5,"one",5.5,true]
// console.log("before",myArray);

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// myArray[0] = 6
// // console.log("after",myArray);

// console.log(myArray.length)

// myArray.push(6)
// console.log("after",myArray);

// myArray.pop()

/* 
  identifiers - set rules followed to create variable name

  vaid identifiers
  firstname - 🚀
  $firstname - 🚀
  _firstname - 🚀
  firstname123 - 🚀

  invalid 
  123firstname - 🐛
  firstname 123 - 🐛
*/

/* 
  object - collection of properties 
  - How to Create 
    {
      key [name] : value [ data or infor] [ pair ] // properties
    }

    let person = {
      firstname: "venkat", //properties 
      lastname: "g",
    };

  - How to Access a Object 
      - Dot Notation 
      - Bracket Notation 

      - Dot Notation 
        console.log(person.firstname);

      - Bracket Notation 
        console.log("Bracket Notation:",person["firstname"])

      - Non Exitent Properties
        console.log("Bracket Notation:",person["age"]) // undefined
      
      - Object Destructing or Destructing on fly 
        let {firstname,lastname} = person

  - Modifying object 
    - person.lastname = "car" // Dot Notation 
    - person["firstname"] = "bus" // Bracket Notation 

  - Adding Object Property 
    - person.age = 10  // Dot Notation
    - person["gender"] = "male" // Bracket Notation 

  - Property Value 
    - String , number , float 
    - Array  - let person2 = { habits: ["chess","singing","cards"] }
    - object - let person2 = { car: { _name:"Audi", model: "A6" } }
    - function - let person2 = { run: function () { console.log("started    runing"); } }
*/ 

// let person = {
//   firstname: "venkat",
//   lastname: "g",
// };
// console.log(person);

// console.log("Dot Notation:", person.lastname);
// console.log("Bracket Notation:", person["lastname"]);

// // Non Exitent Properties
// console.log("Dot Notation:", person.age); // undefined
// console.log("Bracket Notation:", person["age"]); // undefined

// let a = "lastname";
// console.log(person[a]);

// // Object Destructing
// let { firstname, lastname } = person;
// console.log("Object Destructing :", firstname, lastname);

// // Modifying object
// person.lastname = "car";
// person["firstname"] = "bus";

// console.log("After change:", person.lastname, person.firstname);


// // Adding object 
// person.age = 10 
// person["gender"] = "male"
// console.log("after adding:",person)

// Property Value 

let person2 = {
  firstname: "string",
  age:15,
  Number:9.25,
  lastname: null,
  car: {
    _name:"Audi",
    model: "A6"
  },
  habits: ["chess","singing","cards"],
  run: function () {
    console.log("started runing");
  }
}
console.log("----------------")

console.log(person2);
console.log(person2.run());
console.log(person2.car._name);
console.log(person2.car.model);
console.log(person2.habits[0]);
