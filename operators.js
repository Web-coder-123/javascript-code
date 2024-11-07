// Operators in js are special symbols that perform operation on one or more files in our js file system
// 1. Arithmetic operators
// Addition
let sum = 5 + 3;
console.log(sum)

// Subtraction
let difference = 10 - sum;
console.log(difference)

// Multiplication
let product = sum * difference;
console.log(product)

// Division
let quotient = product / 4;
console.log(quotient)

// Modulus
let remainder = quotient % 3;
console.log(remainder)

// 2. Assignment Operators
// These operators assign values to variables

// Assignment
let x = 5;
console.log(x)

// Addition Assignment
let y = 5;
y += 1;
console.log(y)

// Subtraction Assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparison Operators
// These operators compare values and return a boolean value
// Equal
console.log(5 == 5)

// Strict Equal
console.log(5 === "5")

// Not equal 
console.log(5 != "5")

// Strict not equal 
console.log(5 !=="5")

// Not equal
console.log(5 != "5")
let n = 3
let b = 2
console.log(n != b)

// Strict not equal
console.log(5 !== "5")
let u = "martins"
let r = 10
console.log(u !== z)

//Greater than
console.log(10 > 5) 
let g = 12
let k = 10
let c = g + k
console.log(k > g)

// Less than
console.log(3 < 2)
let o = 12
let i = 10
let w = o - i
console.log(c < w)

// Greater than and equal
console.log(4 >= 5)
let a = 6
let l = 6
console.log(a >= l)

// Using logical operators declare four variables that logs boolean value on console
// Using comments explain how it functions
 
// 4.Logical Operators
// And Logical Operator &&
const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance
console.log(carDrive);

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry
console.log(canEnter)

// Or Logical Operator ||
const knowsHTML = false;
const knowsCSS  = true;
const canDesignWeb = knowsHTML || knowsCSS
console.log(canDesignWeb)

const isAdmin = false;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser
console.log(canAccessPage)

const isBoy = true;
const isGirl = false;
const hasDriversLicense = true;

const canDrive = isBoy || isGirl && hasDriversLicense;
console.log(canDrive);

