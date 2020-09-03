let bar = 100;
let baz = 20;
let quux = "admin";
const url = `http://example.com/foo?bar=${bar + baz}&quux=${quux}`;
console.log(url);
