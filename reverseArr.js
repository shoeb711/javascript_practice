function reverseArray(array) {
    //   const res = [];

    //   for (let i = array.length - 1; i >= 0; i--) {
    //     res.push(array[i]);
    //   }

    //   return res;

    // reverse in place

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        // [array[left],array[right]] = [array[right], array[left]]
        [array[left], array[right]] = [array[right], array[left]];

        left++;
        right--;
    }

    return array
}

const arr = [1, 2, 3, 4];

const res = reverseArray(arr);
console.log(res);
