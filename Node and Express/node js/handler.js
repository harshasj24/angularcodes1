const axios = require("axios");
let data;

const users = [
  {
    name: "harsha",
    age: 22,
  },
  {
    name: "srinivas",
    age: 22,
  },
  {
    name: "sahana",
    age: 42,
  },
];

const products = [
  {
    product: "laptop",
    price: 45000,
  },
  {
    product: "mobile",
    price: 25000,
  },
  {
    product: "Hdd",
    price: 4500,
  },
];

const handlerRequst = (req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/login") {
    res.end("Login page");
  } else if (req.url === "/user") {
    const usersDetails = JSON.stringify(users);
    res.end(usersDetails);
  } else if (req.url === "/products") {
    const productsDetails = JSON.stringify(products);
    res.end(productsDetails);
  } else if (req.url === "/Api") {
    let datas;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resu) => {
        datas = resu;
      })
      .catch((err) => {
        console.log(err);
      });
    res.end(datas);
    console.log(datas);
  } else {
    res.end("404 page not found");
  }
};

module.exports = {
  handlerRequst,
};
