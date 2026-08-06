function longestConsecutive(nums) {
    const sortedArr = nums.toSorted((a, b) => a - b)

    let currStreak = 1
    let longestStreak = 1
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] + 1 === sortedArr[i + 1]) {
            currStreak++

            if (currStreak >= longestStreak) {
                longestStreak = currStreak
            }
        } else if (sortedArr[i] === sortedArr[i + 1]) {
            currStreak = currStreak

        } else {

            currStreak = 1
        }
    }
    return longestStreak
};

// const res = longestConsecutive([1, 0, 1, 2])
const res = longestConsecutive([0,3,7,2,5,8,4,6,0,1])

console.log(res);
