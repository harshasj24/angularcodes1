const http = require("http");
const fs = require("fs");

http
  .createServer((request, responce) => {
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./view.txt", (err, data) => {
        if (err) {
          responce.writeHead(404, {
            "Contetn-Type": "text/plain",
          });
          responce.write("file not found");
          responce.end();
        } else {
          responce.writeHead(200, { "Content-Type": "text/html" });
          responce.write(data);
          responce.end();
        }
      });
    } else {
      responce.writeHead(404, { "Content-Type": "text/plain" });
      responce.write("file not found");
      responce.end();
    }
  })
  .listen(2000);
