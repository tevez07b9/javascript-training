function quux(strings, ...values) {
  console.log(strings[0]); // === "foo\n"
  console.log(strings[1]); // === "bar"
  console.log(strings.raw[0]); // === "foo\\n"
  console.log(strings.raw[1]); // === "bar"
  console.log(values[0]); // === 42
}
quux`foo\n${42}bar`;
console.log("with String.raw\n");
console.log(String.raw`foo\n${42}bar`);
