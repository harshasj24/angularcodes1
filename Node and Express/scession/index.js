const express = require("express");
const exphbs = require("express-handlebars");
const cookiePareser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = 3650;

const name = "harsha";
const npass = "harsha";

const oneDay = 24 * 60 * 60 * 1000;
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
// middlewares starts
// secession lever middleware
app.use(
  session({
    secret: "asecreatkey",
    saveUninitialized: true,
    resave: false,
    cookie: { oneDay },
  })
);

// cookie parser
app.use(cookiePareser());
// bodyparser middlewares
app.use(express.urlencoded({ extended: true }));

// middlewares ends

// user page

app.get("/user", (req, res) => {
  if (req.session.userId) {
    res.send('session is validation <a href="/logout">logout</a>');
  } else {
    res.redirect("/");
  }
});

app.post("/login", (req, res) => {
  let { mail, pass } = req.body;
  if (mail === name && pass === npass) {
    req.session.userId = mail;
    res.redirect("/user");
  } else {
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/", (req, res) => {
  if (req.session.userId) {
    res.redirect("/user");
  } else {
    res.render("./login.handlebars");
  }
});

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
