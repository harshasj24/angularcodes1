const valid = require("validator");
const isValid = valid.isEmail("abcd@gmail.com");
console.log(isValid);

const newValid = valid.isDate("24-04-2022");
console.log(newValid);
