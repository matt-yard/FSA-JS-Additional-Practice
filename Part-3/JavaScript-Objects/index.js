console.log("Hello World!");

//Code here

const person = {
  name: "Bob",
  age: 35,
  favoriteColors: ["blue", "green", "purple"],
};

console.log(person);

// using dot notation to access a property
const name = person.name;
// using bracket notation
// const name = person["name"]

const age = person.age;

const favoriteColors = person.favoriteColors;

console.log("Name: ", name);
console.log("Age: ", age);
console.log("Favorite Colors: ", favoriteColors);

// Adds a new property to the object. If the favoriteFood property already
// existed on the object, this would reassign it to "pizza"
person.favoriteFood = "pizza";

// Removing properties from an Object

delete person.favoriteColors;

console.log(person);

const newPerson = { ...person };

newPerson.name = "Alice";
newPerson.age = 27;

console.log("person, ", person);
console.log("newPerson ", newPerson);

// Bonus:
// Using Object.assign() to assign multiple new properties at once

const newProperties = {
  city: "Boston",
  favoriteMovie: "Ratatouille",
};

Object.assign(newPerson, newProperties);

console.log(newPerson);

// Creating a method

newPerson.sayName = function () {
  console.log(`My name is ${this.name}`);
};

newPerson.sayName();
