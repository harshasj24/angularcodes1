const express = require("express");
const exphbs = require("express-handlebars");
const { get } = require("http");
let port = 3300;

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const per = {
    name: "harsha",
    age: 22,
  };
  res.render("./home.handlebars", { per });
});
app.get("/about", (req, res) => {
  const persons = [
    {
      name: "harsha",
      id: 01,
    },
    {
      name: "sahana",
      id: 02,
    },
    {
      name: "mahesh",
      id: 03,
    },
  ];
  res.render("./about.handlebars", { persons });
});

app.get("/det", (req, res) => {
  const users = ["harsha", "savanth", "jerusha", "praveen", "sahana"];
  res.render("./details.handlebars", { users });
});
app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
