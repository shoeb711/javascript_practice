function memoizedAdder() {
    let cache = {};
  
    return (num1, num2) => {
      const [a, b] = [num1, num2].sort();
      const key = `${a}-${b}`; // if passed arg 1 ,2 key will be 1-2
  
      if (cache[key]) {
        // if cache object has some properties where the key is same, then the same property will be retrned
        return cache[key];
      }
  
      //if not we wil calculate the result and add it in cache object with the specified key
      let result = a + b;
      cache[key] = result;
      return result;
    };
  }
  
//   const calculation = memoizedAdder();
//   console.log(calculation(1, 2));
//   console.log(calculation(7, 4));
//   console.log(calculation(7, 4));
//   console.log(calculation(9, 3));

function memoizedAdder(num1,num2) {
    let cache = {};
  
    const [a, b] = [num1, num2].sort((a, b) => a - b);
    const key = `${a}-${b}`;
    if (cache[key]) {
        cache[key];
    }
    let result = a + b;
    cache[key] = result;
    return result;
  }
  
//   console.log(memoizedAdder(2, 3));
//   console.log(memoizedAdder(2, 3));
//   console.log(memoizedAdder(5, 4));
//   console.log(memoizedAdder(7, 5));
  
