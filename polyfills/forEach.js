Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const arr = [1,2,3]

arr.myForEach((el) => console.log(el * 2))