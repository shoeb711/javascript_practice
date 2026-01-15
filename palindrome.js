function palindrome(str) {
  let rStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rStr += str[i];
  }

  if (str === rStr) {
    return "Palindrome";
  } else {
    return "not palindrom";
  }
}

const str = "racecar";
console.log(palindrome(str));
