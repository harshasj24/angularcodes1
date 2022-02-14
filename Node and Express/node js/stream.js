const fs = require("fs");
const readStream = fs.createReadStream("view/view.txt");

readStream.on("open", () => {
  console.log("data has been opend");
});

readData = "";
readStream.on("data", (chunk) => {
  console.log("data from the file");
  console.log(chunk);
  readData += chunk;
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("data has been ended");
});

readStream.on("err", () => {
  console.log(err);
});
