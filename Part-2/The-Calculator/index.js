console.log("Hello World!");

const userName = "";

if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello, guest!");
}

// We can also use a ternary operator directly inside a template literal to
// accomplish this:
// console.log(`Hello, ${userName ? userName : "guest"}!`)

const num1 = 20;
const num2 = 3;

const operation = "exponent";

let result = 0;

if (operation === "add") {
  result = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} is ${result}.`);
} else if (operation === "subtract") {
  result = num1 - num2;
  console.log(`Difference of ${num1} and ${num2} is ${result}.`);
} else if (operation === "multiply") {
  result = num1 * num2;
  console.log(`Product of ${num1} and ${num2} is ${result}.`);
} else if (operation === "divide") {
  result = num1 / num2;
  console.log(`Division of ${num1} and ${num2} is ${result}.`);
} else if (operation === "modulus") {
  result = num1 % num2;
  console.log(`Modulus of ${num1} and ${num2} is ${result}.`);
} else {
  console.log(`${operation} is an invalid operation.`);
}

// Bonus:
// Validating the input
// Before we perform any operations, we can check first to make sure that
// both numbers are actually of type "Number". We'll take advantage of the
// typeof operation, and the || ("or") operation

if (typeof num1 !== "number" || typeof num2 !== "number") {
  console.log("Invalid input type.");
} else {
  // If we make it here, we know both inputs are numbers, and we can continue
  // our normal operation checks and calculations
}

// Adding an exponent operation:

if (operation === "exponent") {
  // The exponent operation is **, the following does num1^num2
  result = num1 ** num2;
  console.log(`${num1} to the power of ${num2} is ${result}`);

  // Note, running this code now will print "exponent is an invalid operation"
  // before making the calculation. This is because of our else statement above.
  // Ideally, we can add this as an else..if statement with the others.
}

// Creating a function

function calculator(num1, num2, operation) {
  let result = 0;

  if (operation === "add") {
    result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`);
  } else if (operation === "subtract") {
    result = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${result}.`);
  } else if (operation === "multiply") {
    result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}.`);
  } else if (operation === "divide") {
    result = num1 / num2;
    console.log(`Division of ${num1} and ${num2} is ${result}.`);
  } else if (operation === "modulus") {
    result = num1 % num2;
    console.log(`Modulus of ${num1} and ${num2} is ${result}.`);
  } else if (operation === "exponent") {
    result = num1 ** num2;
    console.log(`${num1} to the power of ${num2} is ${result}`);
  } else {
    console.log(`${operation} is an invalid operation.`);
  }
}

// Calling the function with different values

calculator(10, 2, "exponent");
calculator(5, 20, "add");
calculator(100, 3, "modulus");
