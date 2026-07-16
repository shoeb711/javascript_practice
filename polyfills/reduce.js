Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue

console.log(acc);

    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i]
    }

    return acc

}

const nums = [1, 2, 3]

const res = nums.myReduce((acc, curr, i, nums) => {
    return acc + curr;
}, 0)

console.log(res);