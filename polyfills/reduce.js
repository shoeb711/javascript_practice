Array.prototype.myReduce = function (callback, initialValue) {

    let acc = initialValue
    let startIndex = 0

    // Check if the user forgot to pass an initial value
    if (initialValue === undefined) {
        acc = this[0] // Set accumulator to the 1st element
        startIndex = 1 // Skip the 1st element and start looping from the 2nd
    }
    
    for (let i = 0; i < this.length; i++) {
         // Update the accumulator with the result of the callback
        acc = callback(acc, this[i], i, this)
    }

    return acc
}

const num = [1, 2, 3, 4]

const res = num.myReduce((acc, nextVal) => acc * nextVal)

console.log(res);