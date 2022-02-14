const url = require("url");
const http = require("http");

http
  .createServer((request, responce) => {
    const reqUrl = url.parse(request.url, true);
    console.log(reqUrl.query.id);
    console.log(reqUrl.query.name);
    responce.write(JSON.stringify(reqUrl.query));
    responce.end();
  })
  .listen(3800);
