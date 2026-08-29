// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]
// Example 3:
// Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
// Output: [1,2]

function topKFrequent(nums, k) {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1;
        } else {
            obj[nums[i]] = 1;
        }
    }

    console.log(obj);

    const maxVal = Object.values(obj)
        .sort((a, b) => b - a)
        .splice(0, k);
    console.log(maxVal);

    let res = [];

    for (const [key, value] of Object.entries(obj)) {
        if (maxVal.includes(value)) {
            res.push(parseInt(key));
        }
    }

    return res;
}

// const nums = [1, 1, 1, 2, 2, 3]; // [1,2]
// const nums = [1]; // [1]
// const nums = [3, 0, 1, 0]; // [1]
// const nums = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2]; // [1,2]
const nums = [4, 1, -1, 2, -1, 2, 3]; // [2,-1]
const k = 2;
const res = topKFrequent(nums, k);

console.log(res);
