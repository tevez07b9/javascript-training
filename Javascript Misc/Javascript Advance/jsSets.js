let chars = new Set(["a", "a", "b", "c", "c"]);
console.log(chars);
console.log(chars.size);
console.log(chars.add("d").add("e"));
console.log(chars.has("3"));
console.log(chars.delete("a"));
chars.clear();
console.log(chars);

// Looping in Sets

let roles = new Set(["admin", "editor", "subscriber"]);
for (const role of roles) {
  console.log(role);
}
