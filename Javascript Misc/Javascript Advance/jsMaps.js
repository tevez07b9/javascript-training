// Maps are use for Mapping Key Value pairs
// Unlike Objects, Maps can have Objects as keys

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" },
  foo = { name: "Foo" };

// Maps lets us use Objects as keys for mapping

let userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

console.log(userRoles);

console.log(userRoles.get(john));
console.log(userRoles.has(foo));
console.log(userRoles.has(lily));
console.log(userRoles.size); // 3

// Iterate over Keys and values

for (const user of userRoles.keys()) {
  console.log(user.name);
}

// Iterate over entities

for (let elem of userRoles.entries()) {
  console.log(`${elem[0].name}: ${elem[1]}`);
}

console.log(userRoles.delete(john));
console.log(userRoles.clear());
