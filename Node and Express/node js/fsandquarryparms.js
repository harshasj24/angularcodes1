const url = require("url");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const quarryPar = url.parse(req.url, true);

    fs.appendFile("new/newFile.txt", JSON.stringify(quarryPar.query), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("done!");
      }
    });
    res.end();
  })
  .listen("4500", () => {
    console.log("server ready");
  });
