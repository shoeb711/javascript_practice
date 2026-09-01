// function removeDuplicate(arr) {
//   // return new Set(arr)
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(!res.includes(arr[i])){
//         res.push(arr[i])
//     }
//   }

//   return res;
// }

// console.log(removeDuplicate([1, 12, 3, 1, 50,1,50,9]));

function removeDuplicate(array) {
    let slow = 0;

    for (let fast = 1; fast < array.length; fast++) {
        // if (/* fast found a new value */) {
        if (array[slow] !== array[fast]) {
            // move slow
            slow++;

            // put new value at slow
            array[slow] = array[fast];
        }
    }

    // return number of unique values
    console.log(slow + 1);

    return array.length;
}

// console.log(removeDuplicate([1, 1, 2]));
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
