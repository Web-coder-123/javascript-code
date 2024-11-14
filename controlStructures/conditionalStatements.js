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

let age = 25;
if(age > 25){
    console.log("Your age is above 25")
}else if(age  < 25){
    console.log("Your age is below 25")
}else{
    console.log("Your age is 25")
}

let fruit = "apple"
if(fruit === "banana"){
    console.log("We have banana in the store")
}else if(fruit === "orange"){
    console.log("We have orange in the store")
}else if(fruit === "coconut"){
    console.log("We have coconut in the store")
}else if(fruit === "apple"){
    console.log("We have apple in the store")
}else{
    console.log("We do not have any fruit in our store")
}
let fruit1 = "apple"

switch (fruit1){
    case "banana":
        console.log("It is banana")
        break;
    case "apple":
        console.log("It is apple")
        break;
    default:
        console.log("We do not have any fruit")

}
let age1 = 29;
switch (age1){
    case age1 > 25:
        console.log("Your age is above 25");
        break;
    case age1 < 25:
        console.log("Your age is below 25");
        break;
    default:
        console.log("Your age is 25");
        break;
}
const actions = ["start", "stop", "pause"]; 
//is an array of allowed actions: "start", "stop", "pause".
let userAction = "start";
// is what the user wants to do, in this case "start".
let isLoggedIn = true;
// tells us whether the user is logged in or not.
switch(true){
    case actions.includes(userAction) && isLoggedIn:
    console.log("Action permitted:" + userAction )
    //First case: If the action is valid (actions.includes(userAction)) and the user is logged in (isLoggedIn), it prints "Action permitted:start".
        break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("Please log in to perform this action")
        //Second case: If the action is valid but the user is not logged in (!isLoggedIn), it asks the user to log in.
        break;
    default:
        console.log("No valid case found");
        //Default case: If no other cases match, it prints "No valid case found".
        //In this example, the first case runs because the user is logged in and trying to perform a valid action ("start").


}

