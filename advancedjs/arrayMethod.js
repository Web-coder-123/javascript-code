const fruits = ["Apple", "Orange", "Banana", "Coconut",];
console.log(fruits);

fruits.push("Cherry")
console.log(fruits);

fruits.unshift("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 1)
console.log(fruits);

fruits[1] = "Blueberry"
console.log(fruits)  

fruits.splice(1, 0, "Strawberry", "Watermelon")
console.log(fruits)

for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
fruits.map(fruit => console.log(fruit))

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits)

let longFruits = fruits.filter (fruits => fruits.length > 7);
console.log(longFruits);

let  foundFruits = fruits.find(fruit => fruit ==="Apple")
console.log(foundFruits)

let hasBanana = fruits.includes("Banana");
console.log(hasBanana)
// Assignment 1
// Example arrays
let array1 = ["apple", "banana", "cherry"];
let array2 = ["date", "elderberry", "fig"];

// Concatenate arrays
let combinedArray = array1.concat(array2);

// Map and display each item in uppercase
combinedArray.map(item => {
  console.log(item.toUpperCase());  // Display each item in uppercase
});
// Assignment 2
// Sort the array alphabetically and then reverse it
let sortedReversedArray = combinedArray.sort().reverse();

// Map and display each item
sortedReversedArray.map(item => {
  console.log(item);  // Display each sorted and reversed item
});
//Assignment 3
// Array of user info (objects)
let users = [
    { name: "John", age: 28 },
    { name: "Alice", age: 34 },
    { name: "Bob", age: 22 }
  ];
  
  // Use map to display each user's name and age
  users.map(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
  });
