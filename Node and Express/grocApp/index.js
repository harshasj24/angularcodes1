const express = require("express");
const exphbs = require("express-handlebars");
const userRouter = require("./routes/items");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const port = 2600;
const oneDay = 24 * 60 * 60 * 1000;

const app = express();
const dbUrl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// database connection
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("database connected sucessfully");
    } else {
      console.log("database not connected");
      console.log(err);
    }
  }
);
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
// handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// middlewares
app.use(
  session({
    secret: "asecreatkey",
    saveUninitialized: true,
    resave: false,
    cookie: { oneDay },
  })
);
app.use(cookieParser());

// default routing
app.get("/", (req, res) => {
  res.render("./homepage.handlebars");
});

app.get("/error", (req, res) => {
  res.status(500).send("ERRRORRRRRR!!!!");
});

// server listining and port
app.listen(port, () => {
  console.log(`server is listing on ${port}`);
});
