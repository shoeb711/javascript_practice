//Currying is defined as changing a function having multiple arguments into a sequence of functions with a single argument.
//It is a process of converting a function with more arity into a function having less arity.
//The term arity means the number of parameters in a function.

//Suppose a function with some arguments so instead of taking all arguments once,
// it takes the first one, and returns a new function which takes the second one and returns a new function
// that takes the third one, and it will keep going until all arguments are fulfilled.

function sum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
const res = sum(1)(2)(3);

// console.log(res);

////////////////////////////

// we have a function that calculates the area of a rectangle:

function calculateArea(width, height) {
  return width * height;
}

const width = 5;
const height = 10;

const area = calculateArea(width, height);
// console.log(area); // Output: 50

// In this example using currying, we are doing something similar,
//  but the focus is on making calculations easier when you have a fixed value (in this case, the width):

function curryCalculateArea(width) {
  return function (height) {
    return width * height;
  };
}

const calculateWithWidth = curryCalculateArea(5);
const areaWithWidth = calculateWithWidth(10);
// console.log(areaWithWidth); // Output: 50

// The key difference lies in the purpose and flexibility:

//1. First Example (No Currying): In this example, you're calculating the area with different width and height values
//  each time you call calculateArea. The width and height can change independently.

// 2. Second Example (Currying): In this example, you're currying the function to focus on calculations with a fixed width.
// You set the width once when you create the curried function, and afterward, you only need to provide the height.
//  This is useful when you have repeated calculations with the same width and varying heights.

// Think of currying as a way to create a specialized calculator for a specific scenario.
//  It's like having a calculator that's preset for multiplication with a fixed number.
//  You set the number once and then use the calculator with different values,
//  knowing that the fixed number (in this case, width) is already taken care of.

//give one more example of currying with comment explanation? 

// function mul (num1) {
//     return(num2) => {
//       return num1 * num2
//     }
// }

// const calculation = mul(2)
// console.log(calculation(5))
