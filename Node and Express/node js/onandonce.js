const event = require("events");

const eventEmitter = new event.EventEmitter();

eventEmitter.on("msg", () => {
  console.log("called using on ");
});

eventEmitter.on("msg", () => {
  console.log("called using on 2 ");
});

eventEmitter.emit("msg");
eventEmitter.emit("msg");

const eventEmitter1 = new event.EventEmitter();

eventEmitter1.once("str", () => {
  console.log("hello ");
});

eventEmitter1.once("str", () => {
  console.log("called using once ");
});

eventEmitter1.emit("str");
eventEmitter1.emit("str");
