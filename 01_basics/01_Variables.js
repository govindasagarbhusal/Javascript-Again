const accountId = 45536
let accountEmail = "govindasagarbhusal@gmail.com"
var accountPassword = "2121"
accountCity = "Kathmandu" // can also be defined without declaring var, let or const
let accountState; // undefined

// accountId = 2; || Not allowed to change as it is declared with const

accountEmail = "gsb@gsb.com"
accountPassword = "121212"
accountCity = "Pokhara";

console.log(accountEmail, accountPassword, accountCity);

/* Prefer to use let over var becasue of issue over block scope and fucntional scope */

console.table([accountId, accountEmail, accountPassword, accountCity]); // print in a table
