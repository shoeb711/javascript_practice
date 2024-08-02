// The Temporal Dead Zone (TDZ):
// The Temporal Dead Zone (TDZ) is a concept in JavaScript that occurs when trying to access variables declared
//  with let and const before they are actually declared and initialized in the code.
//  Here's a detailed explanation along with an example:


// Understanding Temporal Dead Zone (TDZ)

// When JavaScript executes code, it goes through two main phases for variables declared with let and const:

// Creation Phase: Variables declared with let and const are hoisted (moved to the top of their containing block)
//  but are not initialized. They exist in an uninitialized state, which is the Temporal Dead Zone (TDZ).

// Execution Phase: Variables in the TDZ cannot be accessed or referenced until they are declared and initialized.
//  Accessing them during this phase results in a ReferenceError.

// Example of Temporal Dead Zone

console.log(myVar); // undefined (no error because of hoisting with var)
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

var myVar = "value"; // var declaration is hoisted with undefined value
let myLet = "let value"; // let and const declarations are hoisted without initialization
const myConst = "const value"; // let and const declarations are hoisted without initialization

//// In this example:

// myVar is declared with var, which means it is hoisted and initialized with undefined during the creation phase.
//  Accessing it before its declaration results in undefined.
// myLet and myConst are declared with let and const respectively. During the creation phase, they are hoisted but not initialized.
//  Trying to access them before their declaration causes a ReferenceError due to being in the TDZ.

//// Key Points to Remember:

// Variables declared with var are hoisted and initialized with undefined during the creation phase. They can be accessed before their declaration without causing a ReferenceError.
// Variables declared with let and const are hoisted but not initialized during the creation phase, causing them to enter the TDZ. Accessing them before their declaration results in a ReferenceError.

//// Practical Considerations:

// Always declare variables at the beginning of their scope to avoid confusion and potential errors related to the TDZ.
// Understand that let and const were introduced to address some of the issues with var, such as unintended hoisting and scoping issues.
// In summary, the Temporal Dead Zone in JavaScript refers to the period between entering scope and variable declaration where variables declared with let and const exist but cannot be accessed. Attempting to do so results in a ReferenceError.
