var longestCommonPrefix = function (strs) {
  let result = '';

  const prefixWord = strs[0].substring(0, 2);
  const samePrefixWord = strs.every((val) => val.includes(prefixWord));

  if (samePrefixWord) {
    result = prefixWord;
  } else {
    result = '';
  }

  return result;
};

const sampleStr = ['lfower', 'flow', 'flight'];

console.log(longestCommonPrefix(sampleStr));

// for (let i = 0; i < strs.length; i++) {
//   const strToMatch = strs[i].substring(0, 2)
//   if (strs[i].startsWith(strs[i].substring(0, 2))) {
//     result += strToMatch;
//     break;
//   }
//   result += '';
// }

// return result;
