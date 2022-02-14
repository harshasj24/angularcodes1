let arr = [];
for (i = 0; i < 10; i++) {
  if (i === 4) {
    arr.unshift(i);
  } else if (i === 5) {
    arr.unshift(i);
  } else {
    arr.push(i);
  }
}

temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
arr.map((val) => {
  console.log(val);
});
