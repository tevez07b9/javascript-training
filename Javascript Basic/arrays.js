// Run these with Nodejs
// Eg: node <filename>

// Arrays
var breakfast = ["coffee", "croissant"];
console.log("logging an array... \n", breakfast);

// Mixed arrays
var hodgepodge = [100, "paint", [200, "brush"], false];
console.log("logging a mixed array... \n", hodgepodge);

// Accessing Elements
var sisters = ["Tia", "Tamera"];
console.log("logging 1st sister...", sisters[0]);
console.log("logging youngest sister...", sisters[sisters.length - 1]);

// Properties
console.log("logging array length...", ["a", "b", "c", 1, 2, 3].length);

console.log("logging array concatenations...", ["tortilla chips"].concat(["salsa", "queso", "guacamole"]));

console.log("Pop the last element...", ["Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"].pop());

console.log("Push a new element at the end...", ["John", "Kate"].push(8));

console.log("Reverse an array...", ["a", "b", "c"].reverse());
