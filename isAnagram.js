const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
    
  const sortedS = s.split("").sort((a, b) => a - b).join("")
  console.log(sortedS);
  
  const sortedT = t.split("").sort((a, b) => a - b).join("")
  console.log(sortedT);
  
  if(sortedS === sortedT) {
    return true
  }else {
    return false
  } 
};

const s = "jam";
const t = "jam";
// const s = "racecar";
// const t = "carracee";
const res = isAnagram(s, t);
console.log(res);


//

function isAnagram (str1,str2){
    let obj1 = {}
    let obj2 = {}

    for (let char of str1) {
        if(obj1[char]){
            obj1[char] = obj1[char] + 1
        }else {
            obj1[char] = 1
        }
    }

    for (let char of str2) {
        if(obj2[char]){
            obj2[char] = obj2[char] + 1
        }else {
            obj2[char] = 1
        }
    }

    console.log(obj1)
    console.log(obj2)

    for(let key in obj1){
        if(!(obj2.hasOwnProperty(key) && obj1[key] === obj2[key])){
            return false
        }
    }
    return true
}

const res = isAnagram("silenr","listen")
console.log(res)
