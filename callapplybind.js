//call
// The call method invokes a function with a specified this value and individual arguments passed as separate arguments.
// It allows you to borrow functions from one object and invoke them in the context of another.
const name = {
  firstName: "John",
  lastName: "Doe",
  //   fullName: function (city, state) {
  //     console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
  //   },
};

const fullName = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
};

const name2 = {
  firstName: "John 2",
  lastName: "Doe 2",
};

//also called function borrowing
// fullName.call(name2, "Mumbai", "Maharashtra");

// function greet() {
//     console.log(`Hello ${this.name}`);
//   }

//   const person = {
//     name: "John",
//   };

//   greet.call(person)

//apply
// apply method is same  as call method, the only difference is the way we pass arguments.
// apply accepts arguments in array
// Similar to call, the apply method invokes a function with a specified this value, but it takes an array as
// its second argument,allowing you to pass a number of arguments to the function.
// fullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind
//bind method is same  as call method, the only difference is that it gives you the copy of the exactly same method without invoking it directly and you can use it later.

const res = fullName.bind(name2, "Mumbai", "Maharashtra");
// res()

const object = {
  firstName: "John",
  lastName: "Doe",
};

function getFullName(city, state) {
  console.log(`${this.firstName} ${this.lastName} ${city} ${state}`);
}

const res2 = getFullName.bind(object);
// res2()

Function.prototype.myBind = function (...args) {
  console.log("args =>", args);
  let obj = this;
  return function (...args2) {
    console.log("args2", args2);
    // this.call(args[0])
    obj.call(...args, args2);
  };
};

const res3 = getFullName.myBind(object, "Mumbai");
res3("Maharashtra");
