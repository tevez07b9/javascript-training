let nums = [5, 7, 25, 8, 15];
let fives = [];
nums.forEach((v) => {
  if (v % 5 === 0) fives.push(v);
});
console.log(fives);
