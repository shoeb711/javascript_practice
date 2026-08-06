function lengthOfLongestSubstring(str) {
    let left = 0
    let set = new Set()
    let longest = 0

    for (let right = 0; right < str.length;) {

        if (set.has(str[right])) {
            set.delete(str[left])
            left++
        } else {
            set.add(str[right])
            longest = Math.max(longest, set.size)
            right++
        }

    }

    return longest
}



// const str = "abba"
// const str = "bbbbb"
// const str = "pwwkew"
// const str = "dvdf"
const str = "abcabcbb"

const res = lengthOfLongestSubstring(str)
console.log(res);
