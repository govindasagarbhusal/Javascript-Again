/* 
DATA TYPES:

1. Primitive : they are call by value not refrence
    a. String => data usually consisting of names
    b. Number 
    c. Boolean => true or false values
    d. Null => Empty
    e. undefined => not defined
    f. Symbol => makes a value unique
    g. BigInt => Large size value
*/

const number = 100
const scoreValue = 98.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // => undefined by defalut

// way to pass symbol
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); false

const bigNumber = 3456789987654342123141n
// console.log(typeof bigNumber);


/*
2. Refrence /Non-Primitive
    a. Arrays
    b. Objects
    c. Functions
*/

const heros = ["shaktiman", "superman", "hulk"] // => array

let myObject = { 
    name: "govinda",     
    age: 20,  //            =======> Object
    married: false,
}

// Function
const muFunction = function(){
    console.log('Hello World');
}