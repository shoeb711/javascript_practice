function twoSum(array, target) {
  const sortedArr = [...array].sort((a, b) => a - b);


  let left = 0;
  let right = sortedArr.length - 1;

  while (left < right) {
    const sum = sortedArr[left] + sortedArr[right];

    if (sum === target) {
      return [sortedArr[left], sortedArr[right]];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

console.log(twoSum([6, 1, 2, 3, 4, 5], 4));
