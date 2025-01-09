const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(4));

const otherNumber = 13.456
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-NP'));

// ********************************************* Maths ************************************************ //  

// console.log(Math);
// console.log(Math.abs(-4)) // => change sign
// console.log(Math.round(4.3)); // => round off to 4
// console.log(Math.ceil(4.2)); => rounds off to 5 (ceil) - rounds off the value to the highest roundoff
// console.log(Math.floor(4.6)); => rounds off to 4 (floor) - rounds off to smallest roundoff

// console.log(Math.sqrt(4)); => square root of 4 -> 2
// console.log(Math.pow(2, 2)) => power of 2^2 -> 4

// console.log(Math.random()*10);
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));