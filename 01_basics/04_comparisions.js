console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

// when comparing make sure the values are of same data types

console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true

console.log(undefined == 0); false
console.log(undefined > 0); false
console.log(undefined < 0); false

// avoid these type of code writing 

// === => Strict check i.e. checks not only the value but also its data type

console.log("2" == 2); //true as it converts string to number
console.log("2" === 2); // false as it also checks data type and doesnot modify
