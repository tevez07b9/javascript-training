const getASTNode = () => {
  return { op: 1, lhs: { op: "sdf" }, rhs: true };
};
let {
  op: a,
  lhs: { op: b },
  rhs: c,
} = getASTNode();
console.log(`op: ${a}, lhs: ${b}, rhs: ${c}`);
