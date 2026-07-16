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

const res = sameFrequency(1233, 3211)
console.log(res);
