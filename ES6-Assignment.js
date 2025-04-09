// 1. One-liner Function
const printName = name => "Hi" + name;
console.log(printName(" Alice")); // Hi Alice

// 2. Template Literals- Template literals are a modern way to create strings, introduced in ES6.
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill("Bob", "$40")); // Hi Bob, please pay: $40

// 3. Destructuring- shortcut to unpack values from arrays or objects into individual variables
const person = {
  uname: "Noam Chomsky",
  age: 92
};

const { uname, age } = person;
console.log(uname); // Noam Chomsky
console.log(age);  // 92
