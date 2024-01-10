"use strict";
// string
let lname;
lname = 'John';
let newname = lname.toUpperCase();
console.log(newname);
//number
let age;
age = 25;
let dob = '35';
let result = parseInt(dob); // the result variable is of number type through type inference
//boolean
//array
let empList;
empList = ['Quagmire', 'Joe', 'Peter'];
let numlist;
numlist = [1, 2, 3, 4, 5];
let results = numlist.filter((num) => num > 2);
console.log(results);
let sum = numlist.reduce((acc, num) => acc + num);
console.log(sum);
//enum  --- can also be defined as constant
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Blue;
//Tupples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
