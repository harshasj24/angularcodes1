const http = require("http");

const server = http.createServer((request, responce) => {
  console.log("server has been created");
  console.log("Request", request);
  console.log("Request", responce);
  responce.write("hello  i am harsha and this is  ");
  responce.end("my first server");
});

server.listen(4100, () => {
  console.log("seerver is listining on the port");
});
