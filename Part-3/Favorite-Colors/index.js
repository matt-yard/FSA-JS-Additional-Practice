console.log("Hello World!");

//code here

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

console.log(colors);

// .shift() removes the first element in an array and returns it.
// this method modifies the original array
const firstColor = colors.shift();
console.log(firstColor);

// .pop() removes the last element in the array and returns it, modifies the
// original array
const lastColor = colors.pop();
console.log(lastColor);

//This is what the array looks like aftering doing .shift() and .pop()
console.log(colors);

// .push() adds an element to the end of the array
colors.push("pink");

// .unshift() adds an element to the beginning of the array
colors.unshift("brown");

// Here's our colors array after .push() and .unshift()
console.log(colors);

// .slice creates a shallow copy of an array from the start index (included) to
// the end index (not included). For more info see:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// .slice() does not affect the original array
const newColors = colors.slice(1, 4);
console.log(newColors);

// joining an array into a string

const newColorsString = newColors.join();
console.log(newColorsString);

// By default, .join() will separate the values with commas, but we can supply
// a string value to use as the separator by passing it into the joing function

const anotherColorString = newColors.join(" / ");
console.log(anotherColorString);

// The spread operator ... makes a shallow copy of an array or object, without
// affecting the original array/object
const colorsCopy = [...colors];
console.log(colorsCopy);
