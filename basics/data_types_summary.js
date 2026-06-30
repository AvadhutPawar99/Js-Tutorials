// Primitive

// 7 Types : String, Number, Boolean, Null, undefinded, Symbol, BigInt

const score = 100
const scoreValue = 22.34
const isLoggedIn = false
const outSideTemp = null
let userEmail ;
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)
const bigNumber = 22334455n

console.log(typeof  score);
console.log(typeof  scoreValue);
console.log(typeof  isLoggedIn);
console.log(typeof  outSideTemp);
console.log(typeof  userEmail);
console.log(typeof  id);
console.log(typeof  anotherId);
console.log(typeof  bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Shaktiman", "Kala Nag"];

let myObj = {
    name : "Aviraj",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// boolean
// object
// undefined
// symbol
// symbol
// bigint
// object
// object
// function