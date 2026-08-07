Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            return true
        }        
    }

    return false
}

const num = [1, 2, 3,4]

const res = num.mySome((n) => n > 4 )

console.log(res);