let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Node {
  constructor(id) {
    this.id = id;
  }
  mark() {
    isMarked.add(this);
  }
  unmark() {
    isMarked.delete(this);
  }
  marked() {
    return isMarked.has(this);
  }
  set data(data) {
    attachedData.set(this, data);
  }
  get data() {
    return attachedData.get(this);
  }
}

let foo = new Node("foo");

JSON.stringify(foo) === '{"id":"foo"}';
console.log(foo.mark());
console.log(foo.data);
console.log(foo.data);
console.log(JSON.stringify(foo));
console.log(isMarked.has(foo));
console.log(attachedData.has(foo));

foo = null; /* remove only reference to foo */

console.log(attachedData.has(foo));
console.log(isMarked.has(foo));
