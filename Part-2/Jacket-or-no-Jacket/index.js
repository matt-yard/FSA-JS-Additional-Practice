console.log("Hello World!");

// Pseudo code:

// We'll need to use conditional logic to check the temperature

// first we need a variable to store the current temperature, so that we can check it later to determine if we need to wear a jacket

// if the temperature is below 40, we will need a heavy jacket
// if its below 60, but above 40, we need a jacket
// if its above 60, but less than 70, we need a light jacket
// otherwise, no jacked needed

// lastly, if its raining outside, we need to bring an umbrella!
// we'll need boolean to determine if its raining or not

// Code here:

let temperature = 60;
let isRaining = true;

if (temperature <= 40) {
  console.log(`It's ${temperature} degrees outside. Wear a heavy jacket!`);
} else if (temperature <= 60) {
  console.log(`It's ${temperature} degrees outside. Wear a jacket!`);
} else if (temperature <= 70) {
  console.log(`It's ${temperature} degrees outside. Wear a light jacket!`);
} else {
  console.log("It's hot outside today, no jacket needed!");
}

if (isRaining) {
  console.log("It's raining, too, so you should bring an umbrella!");
} else {
  console.log("No rain today, you can leave the umbrella at home!");
}

// Bonus:

// Using ternary instead of an if statement:

console.log(
  isRaining
    ? "It's raining, too, so you should bring an umbrella!"
    : "No rain today, you can leave the umbrella at home!"
);

// Creating a reusable function:

function doINeedAJacket(temperature, isRaining) {
  if (temperature <= 40) {
    console.log(`It's ${temperature} degrees outside. Wear a heavy jacket!`);
  } else if (temperature <= 60) {
    console.log(`It's ${temperature} degrees outside. Wear a jacket!`);
  } else if (temperature <= 70) {
    console.log(`It's ${temperature} degrees outside. Wear a light jacket!`);
  } else {
    console.log("It's hot outside today, no jacket needed!");
  }

  console.log(
    isRaining
      ? "It's raining, too, so you should bring an umbrella!"
      : "No rain today, you can leave the umbrella at home!"
  );
}

// Calling the function with different values:

doINeedAJacket(50, true);
doINeedAJacket(40, false);
doINeedAJacket(90, false);
