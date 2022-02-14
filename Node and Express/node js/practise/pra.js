const EventEmitter = require("events");

const files = require("fs");

const emiter = new EventEmitter();

emiter.on("test", () => {
  console.log("this is node event");
});
emiter.emit("test");

emiter.on("add", (a, b) => {
  console.log(" sum", a + b);
});

emiter.emit("add", 10, 20);

// reference call back function

let prod = (a, b) => {
  console.log(a * b);
};

emiter.on("product", prod);

emiter.emit("product", 10, 20);
console.log(emiter.eventNames());
emiter.removeListener("product", prod);
console.log(emiter.eventNames());
