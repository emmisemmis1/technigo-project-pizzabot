// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const customerName = prompt("Hi and welcome", "Name") || "friend";
alert(`Hi and welcome, ${customerName}!`);

// Step 2 - Food choice
// Your code goes here

const foodChoice = prompt("What would you like to order? \n1. Pizza\n2. Pasta\n3. Salad");

let selectedFood;
if (foodChoice === "1") {
  selectedFood = "Pizza";
} else if (foodChoice === "2") {
  selectedFood = "Pasta";
} else if (foodChoice === "3") {
  selectedFood = "Salad";
}

// Step 3 - Subtype choice
// Your code goes here

const subtypeChoice = prompt(`What kind of ${selectedFood} would you like? \n1. `)

if (selectedFood === "Pizza") {
  const pizzaChoice = prompt(
    "Choose a pizza:\n1. Margherita\n2. Vesuvio\n3. Capricciosa"
  );

} else if (selectedFood === "Pasta") {
  const pastaChoice = prompt(
    "Choose a pasta:\n1. Carbonara\n2. Cacio e pepe\n3. Bolognese"
  );

} else if (selectedFood === "Salad") {
  const saladChoice = prompt(
    "Choose a salad:\n1. Greek\n2. Italian\n3. Caesar"
  );
}

// Step 4 - Age
// Your code goes here

const ageChoice = prompt(
  "Is the food intended for a child or an adult?\n1. Child\n2. Adult"
);

let ageGroup;

if (ageChoice === "1") {
  ageGroup = "Child";
} else if (ageChoice === "2") {
  ageGroup = "Adult";
}
alert(
  `A portion suitable for a ${ageGroup.toLowerCase()} is coming your way!`
);

// Step 5 - Order confirmation
// Your code goes here

const confirmation = prompt(
  `You ordered ${selectedSubtype} ${selectedFood}. Confirm order?\n1. Yes\n2. No`
);

if (confirmation === "1") {
  alert("Thank you for your order! Your meal will be prepared shortly.");
} else if (confirmation === "2") {
  alert("No worries! We hope to see you again soon.");
}
