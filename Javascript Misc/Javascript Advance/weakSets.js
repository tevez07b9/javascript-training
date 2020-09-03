/*
A WeakSet is similar to a Set except that it contains only objects
Since objects in a WeakSet may be automatically garbage-collected, 
a WeakSet does not have size property. 
*/

let computer = { type: "laptop" };
let server = { type: "server" };
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
  console.log("We have a server");
}
