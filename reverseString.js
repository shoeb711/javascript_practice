function reverseString(str) {
  // return str.split("").reverse().join("")
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseString("abcd"));
