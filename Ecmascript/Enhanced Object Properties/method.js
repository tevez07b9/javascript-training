let obj = {
  foo: "bar",
  ["baz" + "spax"]: 42,
  cat() {
    return `Obj Function`;
  },
};
console.log(obj);
console.log(obj.cat());
