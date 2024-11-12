// Control Structure in JavaScriptis essential for controlling the flow of execution in your code. They allow
// you to dictate how your program should respond based on conditions.

// 1.Conditional Statements
// Conditional Statements executes a block of code if the specified condition is true or false

// A.If Statements
let temperature = 30;
 if(temperature > 25){
    console.log("It is a hot day!")
 } else {
    console.log("It is a cold day!")
 }

const isAdmin = false;
const isSuperUser = false;

if(isAdmin || isSuperUser){
    console.log("You have access to this app")
}else{
    console.log("You don't have access to this app")
}

let paidSchoolFees = true;
let hasGoodHealth = true;

if (paidSchoolFees && hasGoodHealth){
    console.log("Welcome to the Class")
} else { 
    console.log("Go back home")
}
console.log(aa)