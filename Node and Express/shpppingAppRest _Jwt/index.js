const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");
const productsRouter = require("./routes/products");
const userRouter = require("./routes/user");
const port = 2650;
const dbUrl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
      console.log("database is not connected");
    }
  }
);

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/products", productsRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`i Am The server and am Listining at ${port}`);
});
