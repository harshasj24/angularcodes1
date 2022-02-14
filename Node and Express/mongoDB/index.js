const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const routerPoducts = require("./routes/products");
let port = 4300;
const dburl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  dburl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("Database connected sucessfully");
    } else {
      console.log("Failed to conntect to database");
      console.log(err);
    }
  }
);

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use("/products", routerPoducts);

app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

app.get("/error", (req, res) => {
  res.send("404");
});

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
