function secondLargestDigit(s) {
   const nums = [];

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            if (!nums.includes(parseInt(s[i]))) {
                nums.push(parseInt(s[i]));
            }
        }
    }

    if (nums.length <= 1) return -1

    const res = nums.sort((a, b) => a - b)[nums.length - 2];

    return res
}

// const s = "dfa12321afd";
const s = "abc1111";

const res = secondLargestDigit(s);

console.log(res);
