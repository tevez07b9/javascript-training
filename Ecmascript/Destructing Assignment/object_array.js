var obj = { a: 1 };
var list = [1];
var { a, b = 2 } = obj;
var [x, y = 2] = list;

console.log(`a: ${a}, b: ${b}, x: ${x}, y: ${y}`);
