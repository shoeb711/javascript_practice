function letterCount(str) {
  const res = {};

  for (let i = 0; i < str.length; i++) {
    console.log("res[str[i]] =>", res[str[i]]);
    
    if (res.hasOwnProperty(str[i])) {
      res[str[i]] = res[str[i]] + 1;
    } else {
      res[str[i]] = 1;
    }
  }

  return res;
}

const letters = "aaabbc";

const res = letterCount(letters);
console.log(res);
