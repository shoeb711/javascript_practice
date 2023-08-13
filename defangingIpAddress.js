const defangIPaddr = function (address) {
  const addressArr = address.split('');
  let result = [];
  for (let i = 0; i < addressArr.length; i++) {
    if (addressArr[i] === '.') {
      // console.log('inside if');
      addressArr[i] = '[.]';
    }
    result[i] = addressArr[i];
  }
  return result.join('');
};

// console.log(defangIPaddr('1.1.1.1'));


// Define a function named "defangIPaddr" which takes an "address" parameter.
// const defangIPaddr = function (address) {
//     // Initialize an empty string to store the modified IP address.
//     let result = '';
  
//     // Iterate through each character in the input string.
//     for (let i = 0; i < address.length; i++) {
//       // Check if the current character is a period (dot).
//       if (address[i] === '.') {
//         // If it's a period, add '[.]' to the modified address.
//         result += '[.]';
//       } else {
//         // If it's not a period, simply add the character to the modified address.
//         result += address[i];
//       }
//     }
  
//     // Return the modified IP address.
//     return result;
//   };
