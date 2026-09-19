function flattenArray(arr) {
    let result = [];

    function helper(array) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
            
            if (Array.isArray(array[i])) {
                helper(array[i]);
                // break;
            }else {

                result.push(array[i]);
            }
        }
    }
    helper(arr);
    return result;
}
// const nestedArr = [1,[2,[3,[4,[5]]]]];
// const nestedArr = [0, 1, 2, [3, 4]];
// const nestedArr = [1, [2, [3]]];
const nestedArr = [
    [1, 2],
    [3, 4],
];
const res = flattenArray(nestedArr);
console.log(res);
