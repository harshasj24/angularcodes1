const fs = require("fs");

let writeFile = () => {
  fs.writeFile("appends/", "hello wlcome to node js", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data written");
    }
  });
};

let append = () => {
  fs.appendFile("appends/appen.txt", " new data added", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("appended sucessfully ");
    }
  });
};

fs.exists("appends", (exixt) => {
  if (!exixt) {
    fs.mkdir("appends", (err) => {
      if (err) {
        console.log(err);
      } else {
        writeFile();
        append();
      }
    });
  } else {
    append();
    writeFile();
    // console.log("data has been written sucessfully");
  }
});

fs.rename("new/demo.txt", "new/newFile.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("renamed");
  }
});
