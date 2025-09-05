const swapVar = (a, b) => {
  let temp = a; // temp = 1, a = 1, b = 2

  a = b; // temp = 1, a = 2, b = 2
  b = temp; // temp = 1, a = 2, b = 1

  console.log(a);
  console.log(b);
  
};

let a = 1;
let b = 2;

const res = swapVar(a, b);
console.log(res);
