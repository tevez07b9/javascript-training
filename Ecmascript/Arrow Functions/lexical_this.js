this.nums = [5, 7, 25, 8, 15];
this.fives = [];

this.nums.forEach((v) => {
  if (v % 5 === 0) this.fives.push(v);
});

console.log(this.fives);
