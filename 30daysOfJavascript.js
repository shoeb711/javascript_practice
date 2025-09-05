// 1.
// Given an integer n, return a counter function. This counter function initially returns n and
// then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const n = 10;
let calls = [];

for (let i = n; i <= n + 2; i++) {
  calls.push(i);
}

// console.log(calls);

const createCounter = function (n) {
  return function () {
    let calls = [];

    for (let i = n; i <= n + 2; i++) {
      calls.push(i);
    }

    return calls;
  };
};

const counter = createCounter(10);
// console.log(counter()); // 10

// 2;
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function (val) {
  return {
    toBe: (num) => {
      if (val === num) {
        return {
          value: true,
        };
      } else {
        return { error: "Not Equal" };
      }
    },
    notToBe: (num) => {
      if (val !== num) {
        return {
          value: true,
        };
      } else {
        return { error: "Equal" };
      }
    },
  };
};

// console.log(expect(5).toBe(null)); // true
// console.log(expect(5).notToBe(3)); // throws "Equal"

// 3.
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounterTwo = function (init) {
  let currentCount = init;
  return {
    increment: () => {
      currentCount++;
      return currentCount;
    },
    reset: () => {
      currentCount = init;
      return currentCount;
    },
    decrement: () => {
      currentCount--;
      return currentCount;
    },
  };
};

const countertwo = createCounterTwo(0);
// console.log(countertwo.increment()); // 1
// console.log(countertwo.increment()); // 2
// console.log(countertwo.decrement()); // 1
// console.log(countertwo.reset()); // 0
// console.log(countertwo.reset()); // 0

// 4.
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

var newMap = function (arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(fn(arr[i], i));
  }

  return newArray;
};

// const arr = [1, 2, 3];

// const plusOne = function constant() { return 42; }

// const res = newMap(arr, plusOne);

// console.log(res,'asdda');

// 5.
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
// A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

var newFilter = function (arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArray.push(arr[i]);
    }
    // newArray.push(fn(arr[i], i));
  }

  return newArray;
};

const arr = [1, 2, 30, 50, 9];

function greaterThan10(n) {
  return n > 10;
}

// const res = newFilter(arr, greaterThan10);

// console.log(res, "asdda");

// 6.
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing
// the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]),
// ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

var newReduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let accumulator = init === undefined ? undefined : init;
  for (let i = 0; i < nums.length; i++) {
    if (accumulator !== undefined) {
      accumulator = fn(accumulator, nums[i]);
    } else {
      accumulator = nums[i];
    }
  }
  return accumulator;
};

function sum(accum, curr) {
  return accum + curr;
}

const arr2 = [1, 2, 3, 4];

// const res = newReduce(arr2, sum, 10);

// console.log(res);

// 7.
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

var composeFunc = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    } else {
      let result = x;

      for (let i = functions.length - 1; i >= 0; i--) {
        result = functions[i](result);
      }

      return result;
    }
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x]; //65

const res = composeFunc(functions);

// console.log(res(4));

// 8.
// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function (...args) {
  return args.length;
};

// console.log(argumentsLength({}, null, "3"));


// 10.
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
// Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts.
// The richest customer is the customer that has the maximum wealth.
// eg 1
// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// eg 2
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10

var maximumWealth = function (accounts) {
  const res = accounts.map((data) =>
    data.reduce((accumulator, currentVal) => accumulator + currentVal)
  );

  const largestArrayEle = res.sort((a, b) => b - a);

  return largestArrayEle[0];
};

accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];
// [
// [1, 2, 3],
// [3, 2, 1],
// ];

// const res2 = maximumWealth(accounts);
// console.log(res2, "res2");

// 11.
// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example
// Input: n = 3
// Output: ["1","2","Fizz"]

var fizzBuzz = function (n) {
  let arr = Array.apply(null, Array(n)).map(function (el, idx) {
    const num = idx + 1;
    if (num % 3 == 0 && num % 5 == 0) {
      return "FizzBuzz";
    }
    if (num % 3 == 0) {
      return "Fizz";
    }
    if (num % 5 == 0) {
      return "Buzz";
    }
    return `${idx + 1}`;
  });

  // const res = arr.map((data) => {
  //   if (data % 3 == 0 && data % 5 == 0) {
  //     return "FizzBuzz";
  //   }
  //   if (data % 3 == 0) {
  //     return "Fizz";
  //   }
  //   if (data % 5 == 0) {
  //     return "Buzz";
  //   }

  //   return data;
  // });

  return arr;
};

// console.log(fizzBuzz(3));

// 12.
// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

var numberOfSteps = function (num) {
  let count = 0;
  if (num === 0) {
    return 0;
  }

  if (num % 2 === 0) {
    count++;
    return numberOfSteps(num / 2);
  }
  if (num % 2 === 1) {
    // count++;
    return numberOfSteps(num - 1);
  }

  // console.log(count, "count");

  return count;

  // return num
};

// console.log(numberOfSteps(4));

// 13.
// Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

var convert = function (s, numRows) {
  const stringArr = s.split("");

  for (let i = 0; i < stringArr[0].length; i++) {
    // console.log(stringArr[i]);
    for (let f = 0; f < stringArr[numRows]; f++) {
      console.log(stringArr[f]);
      console.log(stringArr[numRows], "stringArr[numRows]");
      console.log(stringArr[f][i]);
    }
  }

  console.log(stringArr);
  return stringArr;
};

const s = "PAYPALISHIRING";
const numRows = 3;

// convert(s, numRows)

// 14.
// 2960. Count Tested Devices After Test Operations
// https://leetcode.com/problems/count-tested-devices-after-test-operations/description/

// var countTestedDevices = function (batteryPercentages) {
//   let count = 0;

//   for (let i = 0; i < batteryPercentages.length; i++) {
//     if (batteryPercentages[i] > 0) {
//       for (let j = i + 1; j < batteryPercentages.length; j++) {
//         if (batteryPercentages[j] == 0) {
//           batteryPercentages[j] = batteryPercentages[1]; // batteryPercentages[j - 1];
//         } else {
//           batteryPercentages[j] = batteryPercentages[j] - 1; // batteryPercentages[j - 1];
//         }
//       }

//       count++;
//     } else {
//       break;
//     }
//   }

//   return count;
// };

// const batteryPercentages = [1, 1, 2, 1, 3];

// const a1 = countTestedDevices(batteryPercentages); //
// console.log(a1, "countTestedDevices");

var countTestedDevices = function (batteryPercentages) {
  let count = 0;

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      count++; // Increment count for tested device
      const remainingTests = batteryPercentages[i] - 1; // Remaining tests for subsequent devices
      for (let j = i + 1; j < batteryPercentages.length; j++) {
        // Decrement battery percentage of subsequent devices
        batteryPercentages[j] = Math.max(
          0,
          batteryPercentages[j] - remainingTests
        );
      }
    } else {
      break; // No need to test further if current device has 0 battery percentage
    }
  }

  return count;
};

const batteryPercentages = [1, 1, 2, 1, 3];

const a1 = countTestedDevices(batteryPercentages);
// console.log(a1, "countTestedDevices"); // Output: 3

// 15.
// Palindrom

// var isPalindrome = function (s) {
//   const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;

//   if (s.length === 0) return true;

//   trimmedStr = s.replace(nonAlphanumericRegex, "").toLowerCase();

//   const strArr = trimmedStr.split("").join("");
//   const reversedArr = trimmedStr.split("").reverse().join("");

//   console.log(strArr, "strArr");
//   console.log(reversedArr, "reversedArr");

//   if (strArr === reversedArr) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const sttr = "race a car";

// const resw = isPalindrome(sttr);

// console.log(resw, "isPalindrome");

// 16. sort the below array which has the most number
// let arr=['gf33dfd95hiyt', 'ak66gghkj88gufyyf', 'ut22ftf76gfy99ug', 'ctruyruy6urur', 'zyy5ug2yt100yug7y']
// expected output: ['ctruyruy6urur','ak66gghkj88gufyyf','gf33dfd95hiyt','ut22ftf76gfy99ug','zyy5ug2yt100yug7y']

//pending

//17. Number of Steps to Reduce a Number in Binary Representation to One

const numSteps = function (s) {
  let decimalRepOfNum = parseInt(s, 2);

  let count = 0;
  while (decimalRepOfNum !== 1) {
    count++;
    // if (decimalRepOfNum == 0) return 0;

    if (decimalRepOfNum % 2 === 0) {
      decimalRepOfNum = decimalRepOfNum / 2;
    } else {
      decimalRepOfNum = decimalRepOfNum + 1;
    }
  }

  return count;
};

const resq = numSteps(
  "1111011110000011100000110001011011110010111001010111110001"
); //1101
// console.log(resq, "numSteps");

// .18
// Sleep
// It should return a promise that resolves after given time
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  })
}

const requestPromise = sleep().then((data) => {
  return Promise.resolve(data);
});


console.log(requestPromise,'requestPromise');
