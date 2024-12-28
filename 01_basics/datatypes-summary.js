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

// **********************************Memory******************************************

// Stack Memory => for all primitive types
//  heap memory => for all non primitive types

let myInstaName = "lazy.elepahnt_"

let anotherName = myInstaName
anotherName = "govinda"
// console.log(anotherName); => govinda
// console.log(myInstaName); => lazy.elephant_

let userOne = {
    email: "user@google.com",
    upi: "user@esewa"
}

let userTwo = userOne 

userTwo.email = "govinda@gmail.com"

// console.log(userOne.email); => govinda@gmail.com
// console.log(userTwo.email); => govinda@gmail.com

// Whenever you access stack it gives you a copy of the value to work on
// Whenever you access heap memory it gives you the refrence of the original value