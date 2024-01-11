//functions must have return types..otherwise error may occur

function add(num1: number, num2: number, num3?: number): number {
  //named function  ..optional parameter

  return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 8));

const sub = (num1: number, num2: number, num3: number = 10): number =>
  num1 - num2 - num3; //arrow function ..required parameter

console.log(sub(33, 23));

const mult = function (num1: number, num2: number): number {
  //function expression

  return num1 * num2;
};

function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];

console.log(add2(2, 3, ...numbers));

console.log(add2(2, 3, 4, 5, 6)); //can also be written like this

console.log(mult(2, 5));



//Generic functions 
     //return type also Type[]..just a place holder
function getItems<Type>(items: Type[]): Type[]{                  

    return new Array<Type>().concat(items) ;
}


let concatResult = getItems([1,2,3,4,5]);

let concatString = getItems(['a','b','c','d']);

console.log(concatResult);
console.log(concatString);

// return types can also be defined while calling generic functions.

let concatResult1= getItems<number>([6,7,8,9]);

let concatResult2 = getItems<string>(['d','e','f','g']);

console.log(concatResult1);
console.log(concatResult2);

function transformItems<Type>(items: Type[], transformer: (item: Type) => Type): Type[] {
    return items.map(transformer);
}

// Example usage with numbers
const squareTransformer = (num: number) => num * num;
const squaredNumbers = transformItems([1, 2, 3, 4, 5], squareTransformer);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example usage with strings
const capitalizeTransformer = (str: string) => str.toUpperCase();
const capitalizedStrings = transformItems(['apple', 'banana', 'cherry'], capitalizeTransformer);
console.log(capitalizedStrings); // Output: ['APPLE', 'BANANA', 'CHERRY']