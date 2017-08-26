var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("while loop")
var count = 0
while (count < 7) {
  console.log(ingredients[count]);
  count++
}

console.log("\nfor loop")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\nbackwards")
for (var i = (ingredients.length-1); i >= 0; i--){
  console.log(ingredients[i]);
}