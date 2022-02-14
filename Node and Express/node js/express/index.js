const express = require("express");
const path = require("path");
const app = express();
let port = 3500;

// Middlewares
// builtin

app.use(express.static("./public"));

// user defined
getDate = (req, res, next) => {
  const date = Date.now();
  req.reqDate = date;
  next();
};

//
getmsg = (req, res, next) => {
  res.msg = "hello";

  next();
};

app.use(getDate);
app.use(getmsg);

app.get("/", (req, res) => {
  res.send();
});

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/getdate", (req, res) => {
  res.send(`current date :  ${new Date(req.reqDate)}`);
});
app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "./files", "index.html"));
});

app.get("/detail", (req, res) => {
  res.send(`<button  onClik="alert('hello world')">click</button>`);
});

app.get("/get", (req, res) => {
  res.send(res.msg);
});
