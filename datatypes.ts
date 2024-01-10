// string

let lname : string;

 lname = 'John';

 let newname = lname.toUpperCase();

 console.log(newname);


 //number

 let age : number;
 age = 25;
 let dob = '35'
 let result = parseInt(dob);  // the result variable is of number type through type inference

//boolean


let choose : boolean = false;


 //array

 let empList : string[];

 empList = ['Quagmire','Joe','Peter'];

 let numlist : Array<number>;

 numlist = [1,2,3,4,5];

 let results = numlist.filter((num)=>num>2);  

 console.log(results);

 let sum = numlist.reduce((acc,num) => acc + num);

 console.log(sum);



//enum  --- can also be defined as constant

enum Color{

Red,
Green,
Blue

}

let c : Color = Color.Blue;

//Tupples -- can store data of various types

let swapNumbs : [firstNumber:number, secondNumber:number];

function swapNumbers(num1:number, num2:number) : [number,number]{

    return [num2, num1];
}
swapNumbs = swapNumbers(10,20);

// any (any types can be used/stored)


// never

//void


