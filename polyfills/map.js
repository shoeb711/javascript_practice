Array.prototype.myMap = function (cb) {
    let res = []

    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this))
    }

    return res

}

const num = [1, 2, 3]

const res = num.myMap((n) => n * 2)

console.log(res);
