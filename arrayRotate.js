function arrayRotate(array, k) {
  const remainder = k % array.length
  // console.log(remainder);
  const rotatedPart = array.splice(0, remainder);
  
  // console.log(rotatedPart);
  // console.log(array);
  // console.log([...array,...rotatedPart]);

  return [...array,...rotatedPart]
  
}

console.log(arrayRotate([1, 2, 3, 4, 5], 1));
