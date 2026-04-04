// Strings methods
let str = "using string methodes";

// console.log(str.replaceAll("i", "t"));
let splitStr = str.split(" ");
console.log(splitStr);

let newStr = str.concat(" concat");
console.log(newStr);

let str3 = str.endsWith("t");
console.log(str3);

let str4 = str.slice(1, 5);
console.log(str4);

let str5 = str.indexOf("m");
console.log(str5);

// Array methods
let arr = ["apple", "bannana", "pinaple", "grapes"];
// push()
arr.push("kaju");
console.log(arr);

// pop()
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("apple");
console.log(arr);

arr.forEach((item) => console.log(item.toUpperCase()));
// console.log(arr);

let users = [
  { name: "rohit", age: 23, isActive: true },
  { name: "shiv", age: 26, isActive: false },
  { name: "nobi", age: 24, isActive: true },
];

let allUserName = users.map((user) => user.name);
console.log(allUserName);

let filterUser = users.filter((user) => user.age > 24);
console.log(filterUser);

let activeUser = users.reduce((acc, user) => {
  if (acc) return acc;
  if (user.isActive) return user;
  return null;
}, null);
console.log(activeUser);
