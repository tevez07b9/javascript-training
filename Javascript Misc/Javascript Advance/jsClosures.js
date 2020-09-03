function fun() {
  var a = 4;
  function innerfun() {
    return a;
  }
  return innerfun;
}
var output = fun();
console.log(output(), "\n");

function multiplyBy(a) {
  function innerfun(b) {
    return a * b;
  }
  return innerfun;
}
var output = multiplyBy(4);
console.log(output(4));
console.log(output(5));
