function countNegatives(array) {
    if (!Array.isArray(array)) return false;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        // if (!Number.isFinite(array[i])) return false;
        if (
            typeof array[i] !== "number" ||
            array[i] === Infinity ||
            array[i] === -Infinity ||
            array[i] !== array[i]
        ) {
            return false;
        }
        if (array[i] < 0) {
            console.log(array[i]);
            count++;
        }
    }

    return count;
}

// const arr = [-1, 0, 1];
// const arr = [1, "a"];
// const arr = [NaN];
const arr = [Infinity];

const res = countNegatives(arr);
console.log(res);
