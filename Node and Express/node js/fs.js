// console.log("program started");
const fs = require("fs");
// if (!fs.existsSync("demo")) {
//   fs.mkdirSync("demo");
// } else {
//   fs.writeFileSync("demo/node.txt", "this is the first file in node");
//   console.log("data has been added");
// }

// console.log("program ended");

fs.writeFileSync("new.txt", "hello world");
let data = fs.readFileSync("new.txt");
console.log(data);
console.log(data.toString());

fs.writeFileSync("new/demo.txt", data.toString());
