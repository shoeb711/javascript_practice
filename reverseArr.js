function reverseArray(arr) {
  const res = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }

  return res;
}

const arr = [1, 2, 3, 4];

const res = reverseArray(arr);
console.log(res);
