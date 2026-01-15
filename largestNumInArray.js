function largestNum(arr) {
  // return Math.max(...arr)
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (res < arr[i]) {
      res = arr[i];
    }
  }

  return res;
}

console.log(largestNum([1, 12, 3, 4, 50]));
