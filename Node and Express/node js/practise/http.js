const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.write(
      JSON.stringify([
        { name: "harsha", age: 22 },
        { name: "sahana", age: 22 },
        { name: "srinivas", age: 22 },
        { name: "praveen", age: 22 },
      ])
    );
    res.end();
  }
});

server.listen(3001, () => {
  console.log("server is lisiting ");
});
