var a = 10,
  b = 20,
  c = 30,
  sum,
  mul,
  sub;
sum = eval(" a + b + c ");
mul = eval(" a  * b * c");
sub = eval(" a  - b");
console.log(sum + "\n");
console.log(mul + "\n");
console.log(sub);

var res;

function fun(a, b) {
  return a * b;
}

eval("res = fun(50, 50);");
console.log(res);
