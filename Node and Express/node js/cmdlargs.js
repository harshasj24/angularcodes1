const args = process.argv;
console.log(args);

let add = (a, b) => {
  console.log(a + b);
};
if (args[2] === add(40, 50)) {
  console.log("sum");
} else if (args[2] === "delete") {
  console.log("delete");
} else {
  console.log("put");
}
