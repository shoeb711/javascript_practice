Array.prototype.myFilter = function (cb) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i])
        }
    }

    return res
}

const num = [1, 2, 3,4]

const res = num.myFilter((n) => n % 2 === 0)

console.log(res);