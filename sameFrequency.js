function sameFrequency(num1, num2) {

    const str1 = String(num1)
    const str2 = String(num2)

    if (str1.length !== str2.length) return

    let obj1 = {}
    let obj2 = {}

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        // obj1[str1[i]] = obj1[str1[i]] + 1 || 1
        if (obj1[str1[i]]) {
            obj1[str1[i]] = obj1[str1[i]] + 1
        } else {
            obj1[str1[i]] = 1
        }
    }


    for (let i = 0; i < str2.length; i++) {
        const element = str2[i];
        // obj2[str2[i]] = obj2[str2[i]] + 1 || 1
        if (obj2[str2[i]]) {
            obj2[str2[i]] = obj2[str2[i]] + 1
        } else {
            obj2[str2[i]] = 1
        }
    }


    for (const key in obj1) {
        if (!(obj2.hasOwnProperty(key) && obj2[key] === obj1[key])) {
            return false
        }
    }
    return true
}

const res = sameFrequency(1233, 3231)
console.log(res);


function sameFreq (arr1,arr2){

    let obj1 = {}
    let obj2 = {}


    for (let num of arr1) {
        if(obj1.hasOwnProperty(num)){
            obj1[num] = obj1[num] + 1
        }else{
            obj1[num] = 1
        }
    }


     for (let num of arr2) {
        if(obj2.hasOwnProperty(num)){
            obj2[num] = obj2[num] + 1
        }else{
            obj2[num] = 1
        }
    }

    console.log(obj1)
    console.log(obj2)

    for(let key in obj1){
        if(!(obj2.hasOwnProperty(key ** 2)  && obj1[key] === obj2[key**2])){
            return false
        }
    }

    return true
}

const res = sameFreq([1,2,3],[9,4,1])
console.log(res)