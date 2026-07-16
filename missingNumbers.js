function missingNumbers(array) {
  const sortedArray = array.sort((a, b) => a - b);

  let res = [];

  for (let i = 0; i < sortedArray.length; i++) {
    const element = sortedArray[i];

    res.push(element);

    console.log(`res[i]: ${res[i]}, element: ${element}`);
  }

  return res;
}

missingNumbers([6, 1, 2, 4, 5]);

// console.log(missingNumbers([6, 1, 2, 4, 5]));