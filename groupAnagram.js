function groupAnagrams(strs) {
    let obj = {}

    for (let str of strs) {
        const sortedStr = str.split("").sort().join("")

        if (!obj[sortedStr]) {
            obj[sortedStr] = []
        }


        obj[sortedStr].push(str)
        // console.log(obj[sortedStr]);
        // console.log(obj);

    }

    console.log(obj);

    return Object.values(obj)



}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

const res = groupAnagrams(strs);
console.log(res);


