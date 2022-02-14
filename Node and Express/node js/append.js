console.log("program started");
const fs = require("fs");

let writefile = () => {
  fs.writeFile("view/view.txt", "this is the FS module", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data has been written sucessfully");
    }
  });
};

let append = () => {
  fs.appendFile("view/view.txt", " new data added to docs", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("appended sucessfully ");
    }
  });
};
let readfile = () => {
  fs.readFile("view/view.txt", (err, data) => {
    if (err) {
      console.log("ERROR!", err);
    } else {
      console.log(data.toString());
    }
  });
};

fs.exists("view", (exists) => {
  if (!exists) {
    fs.mkdir("view", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("folder has been ceerated sucessfully");
        writefile();
        readfile();
        append();
      }
    });
  } else {
    writefile();
    readfile();
    append();
  }
});
