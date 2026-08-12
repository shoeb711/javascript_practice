// function twoSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum([2,5,5,11], 10));

function twoSum(array, target) {

  let obj = {}

  for (let i = 0; i < array.length; i++) {
    const sum = target - array[i]
    if (obj.hasOwnProperty(sum)) {

      console.log("sum -",sum, "curr -",array[i]);

      console.log(obj[sum]);

      return [obj[array[i]], i]


    }

    obj[array[i]] = i
    // console.log(obj);

  }



}

// console.log(twoSum([6, 1, 2, 3, 4, 5], 4));
console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3, 3], 6));

// console.log(twoSum([3, 2, 4], 6));

