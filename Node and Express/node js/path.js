const path = require("path");
const fileNames = path.parse(__filename);
console.log(fileNames);
console.log(fileNames.root);
console.log(fileNames.dir);
console.log(fileNames.base);
console.log(fileNames.ext);
console.log(fileNames.name);
3;
