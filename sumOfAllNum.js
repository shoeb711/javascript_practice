function sumOfAllNum(array) {
  // return array.reduce((prev, curr) => prev + curr)

  let res = 0;

  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }

  return res;
}

console.log(sumOfAllNum([5, 1, 3]));
