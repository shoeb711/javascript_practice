const str = "racecar";

let rStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  rStr += str[i];
}

if (str === rStr) {
  console.log("Palindrome");
} else {
  console.log("not palindrom");
}
