const getASTNode = () => {
  return { op: 1, lhs: "sdf", rhs: true };
};
let { op, lhs, rhs } = getASTNode();
console.log(`op: ${op}, lhs: ${lhs}, rhs: ${rhs}`);
