const name = "govinda "
const repoCount = 7

// console.log(name + repoCount);

// console.log(`Hello my name is ${name}, I have ${repoCount} repositories on github`);

const gameName = new String('govinda-sb')
// console.log(gameName[0]); => g

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "    govinda    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://govindasagarbhusal/govinda20%sagar20%bhusal"

// console.log(url.replace(/20%/g, '-')) => replaces all values of 20% with "-"

console.log(url.includes('govinda')); // => true
console.log(url.includes('semester')); // => false

console.log(gameName.split('-'));