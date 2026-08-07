Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            return this[i]
        }
    }

    return undefined
}

const num = [1, 2, 3,4]

const res = num.myFind((n) => n > 2)

console.log(res);