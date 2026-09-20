function frequencyCounter(array) {
    console.log(array);
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        if (obj.hasOwnProperty(array[i])) {
            obj[array[i]] = obj[array[i]] + 1;
        } else {
            obj[array[i]] = 1;
        }
    }

    console.log(Object.entries(obj).flat().join(""));
    
    return obj

}

// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const items = "aabbccc"

const res = frequencyCounter(items);

console.log(res);
