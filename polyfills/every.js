Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if(!callback(this[i],i,this)){
            return false
        }        
    }

    return true
}

const num = [1, 2, 3,4]

const res = num.myEvery((n) => n >2 )

console.log(res);