console.log("program statrd");

let os = require("os");

console.log("architecture", os.arch());

console.log("platform", os.platform());

console.log("total memory", os.totalmem());

console.log("free memory", os.freemem()); //(((os.freemem()/1024)/1024)

console.log("program ended");
