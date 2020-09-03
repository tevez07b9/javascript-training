/*
A WeakMap is similar to a Map except the keys of a WeakMap must be objects. 
It means that when a reference to a key (an object) is out of scope, 
the corresponding value is automatically released from the memory.

Elements of a WeakMap cannot be iterated.
Cannot clear all elements at once.
Cannot check the size of a WeakMap.
*/

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" },
  foo = { name: "Foo" };

let userRoles = new WeakMap([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

if (userRoles.has(john)) {
  console.log("John has a role!");
}
