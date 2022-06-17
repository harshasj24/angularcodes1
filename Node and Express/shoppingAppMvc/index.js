const express = require("express");
const app = express();
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const port = 3003;
const routerPoducts = require("./routes/product");
const localDbUrl =
  " mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb";
const dburl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(
//   localDbUrl,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (!err) {
//       console.log("Database connected sucessfully");
//     } else {
//       console.log("Failed to conntect to database");
//       console.log(err);
//     }
//   }
// );
mongoose.connect("mongodb://127.0.0.1:27017/test", (err) => {
  if (!err) {
    console.log("DB connected");
  } else {
    console.log("DB not connected");
  }
});
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", routerPoducts);

app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
