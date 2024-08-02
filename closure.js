// Closure:
// A closure in JavaScript is a feature where an inner function has access to the outer (enclosing) function’s variables even after the outer function has finished executing. Closures are created every time a function is created, at function creation time.
// Understanding Closures with Examples
// Basic Examples

function outerFunction() {
    let outerVariable = 'I am from outerFunction';

    function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction has finished executing
myClosure(); // Logs: I am from outerFunction

// In this example:
// outerFunction declares a variable outerVariable and defines an inner function innerFunction.
// innerFunction accesses outerVariable from the outer scope.
// outerFunction returns innerFunction, creating a closure.
// When myClosure is called, it still has access to outerVariable, even though outerFunction has finished executing.
// Practical Example: Function Factory
// Closures can be used to create function factories.

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2

// In this example:
// createCounter is a function that returns an anonymous inner function.
// Each time createCounter is called, it creates a new closure with its own count variable.
// counter1 and counter2 are independent of each other, each maintaining its own count state.
// Practical Example: Private Variables
// Closures can be used to create private variables.

function createPerson(name) {
    let privateName = name;

    return {
        getName: function() {
            return privateName;
        },
        setName: function(newName) {
            privateName = newName;
        }
    };
}

const person = createPerson('Alice');
console.log(person.getName()); // Alice
person.setName('Bob');
console.log(person.getName()); // Bob

// In this example:
// createPerson creates an object with getName and setName methods.
// The privateName variable is only accessible through these methods, providing encapsulation and privacy.
// Key Points to Remember:
// Scope Chain: A closure has access to its own scope, the scope of the outer function, and the global scope.
// Persistence: The variables in the outer function are preserved even after the outer function has finished executing.
// Practical Use Cases: Closures are commonly used for data encapsulation, creating private variables, and function factories.
// Example of Scope Chain
// javascript
// Copy code
let globalVar = 'I am a global variable';

function outerFunction(outerParam) {
    let outerVar = 'I am from outerFunction';

    function innerFunction(innerParam) {
        let innerVar = 'I am from innerFunction';
        console.log(globalVar); // Accessing global variable
        console.log(outerVar);  // Accessing outer function variable
        console.log(innerVar);  // Accessing inner function variable
        console.log(outerParam); // Accessing outer function parameter
        console.log(innerParam); // Accessing inner function parameter
    }

    return innerFunction;
}

const myClosure2 = outerFunction('Outer Param');
myClosure2('Inner Param');
// Logs:
// I am a global variable
// I am from outerFunction
// I am from innerFunction
// Outer Param
// Inner Param

