console.log("js-4 Data types");

// Primitive data type
// Number
let x = 10;
let y = 10.5;
console.log(x, typeof x);
console.log(y, typeof y);

// String
let str = "Hello";
console.log(str, typeof str);

// Boolean (true/false)
let isBool = true;
let isBool1 = false;
console.log(isBool, typeof isBool);
console.log(isBool1, typeof isBool1);

// Undefine
let undef;
console.log(undef, typeof undef); //undefine

// Null
let nul = null;
console.log(nul, typeof nul); //object

// Symbol
let symbol = Symbol("hello");
console.log(symbol, typeof symbol); //symbol

// BigInt (2 power 53-1)2^53-1
let bigInt = 123456789736367472635477583645253647346537473645n;
console.log(bigInt, typeof bigInt); //bigint

//Object
let obj = { name: "Rohit", age: 23 };
console.log(obj, typeof obj); //object

// Arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr); //object

//Functions
function fn(arg) {
  console.log("Hello", arg);
}
fn("Rohit");
console.log(fn, typeof fn); //function

// Date
let date = new Date();
console.log(date, typeof date); //object

// RefExp
let re = /ark-guvi+xyz/;
console.log(re, typeof re); //object

// Map
let map = new Map();
map.set("name", "Rohit");
map.set("age", 23);
console.log(map, typeof map); //object

// Set
let set = new Set([1, 2, 3]);
console.log(set, typeof set); //object

//Special values
let max = Infinity;
let min = -Infinity;
console.log(max, typeof max); //number
console.log(min, typeof min); //number

// NaN
let notANumber = NaN;
console.log(notANumber, typeof notANumber); //number
