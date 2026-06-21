function arrayChunking(array, chunkNum) {
  let res = [];

  for (let i = 0; i < array.length; i += chunkNum) {
    res.push(array.slice(i, i + chunkNum));
  }

  return res;
}

console.log(arrayChunking([1, 2, 3, 4, 5, 6], 2));
