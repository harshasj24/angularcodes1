const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
let port = 3050;
const fs = require("fs");
const routerProducts = require("./routes/products");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use("/products", routerProducts);

let produtcs = [
  {
    _id: 1,
    pName: "bag",
    pDesc: "college bag",
    pPrice: 1500,
  },
];
// let newData = "";
// produtcs.push(newData);
// fs.readFile("data/pro.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log();
//     newData += data.toString();
//     console.log(newData);
//     produtcs.push(JSON.parse(JSON.parse(JSON.stringify(data.toString()))));
//     console.log(produtcs);
//   }
// });
// console.log(newData);

app.get("/", (req, res) => {
  res.render("./landingpage.handlebars");
});

// app.get("/products/products", (req, res) => {
//   res.render("./products.handlebars", { produtcs });
// });

// app.get("/products/add-products", (req, res) => {
//   res.render("add-products.handlebars");
// });

// app.post("/products/add-products", (req, res) => {
//   console.log(req.body);
//   let { _id, pName, pDesc, pPrice, img } = req.body;
//   _id = parseInt(_id);
//   pPrice = parseInt(pPrice);
//   produtcs.push({
//     _id,
//     pName,
//     pDesc,
//     pPrice,
//     img,
//   });
//   let append = () => {
//     fs.appendFile("data/pro.txt", JSON.stringify([req.body]), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("appended");
//       }
//     });
//   };

//   fs.exists("data", (exists) => {
//     if (!exists) {
//       fs.mkdir("data", (err) => {
//         if (err) {
//           console.log("err");
//         } else {
//           console.log("Folder created sucessfully");
//           append();
//         }
//       });
//     } else {
//       append();
//       console.log("data has been appended sucessfully");
//     }
//   });

//   res.redirect("/products/products");
// });

// app.get("/products/edit-product/:_id", (req, res) => {
//   console.log(req.params._id);
//   let _id = parseInt(req.params._id);
//   console.log("_id", _id);
//   const index = produtcs.findIndex((product) => {
//     return parseInt(product._id) === parseInt(_id);
//   });
//   console.log("index", index);
//   const selectedPro = produtcs[index];
//   res.render("./edit-products.handlebars", { selectedPro });
// });

// app.post("/products/edit-products", (req, res) => {
//   console.log(req.body);

//   let { _id, pName, pDesc, pPrice } = req.body;
//   _id = parseInt(_id);
//   pPrice = parseInt(pPrice);
//   const index = produtcs.indexOf((pro) => {
//     return pro._id === _id;
//   });

//   produtcs.splice(index, 1, { _id, pName, pDesc, pPrice });
//   res.redirect("/products/products");
// });
// app.get("/products/delete-product/:_id", (req, res) => {
//   console.log(req.params);
//   let _id = parseInt(req.params._id);
//   console.log(_id);

//   let newPro = produtcs.filter((val) => {
//     return parseInt(_id) !== parseInt(val._id);
//   });
//   produtcs = [...newPro];
//   console.log(produtcs);
//   res.redirect("/products/products");
// });

app.listen(port, () => {
  console.log(`server is listining on ${port}`);
});
