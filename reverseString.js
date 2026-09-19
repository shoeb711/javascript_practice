function reverseString(s) {
  // return str.split("").reverse().join("")
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
 let res = []
    for(let i = s.length - 1; i >= 0; i--){
        res.push(s[i])
    }

return res
}

console.log(reverseString(["h","e","l","l","o"]));
