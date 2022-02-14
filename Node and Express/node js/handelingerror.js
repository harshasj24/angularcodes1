console.log("started");
const fs = require("fs");

try {
  const read = fs.readFileSyn("./new/newFile.txt");
  console.log(read.toString());
} catch {
  console.log("404 ERROR! file not found");
}

console.log("ended");
