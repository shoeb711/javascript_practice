function removeDuplicate(arr) {
  // return new Set(arr)
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if(!res.includes(arr[i])){
        res.push(arr[i])
    }
  }

  return res;
}

console.log(removeDuplicate([1, 12, 3, 1, 50]));
