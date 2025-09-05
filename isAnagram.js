const isAnagram = (s, t) => {
    
  const sortedS = s.split("").sort((a, b) => a - b).join("")
  console.log(sortedS);
  
  const sortedT = t.split("").sort((a, b) => a - b).join("")
  console.log(sortedT);
  
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {}
  }
  return false;
};

const s = "jar";
const t = "jam";
// const s = "racecar";
// const t = "carracee";
const res = isAnagram(s, t);
console.log(res);
