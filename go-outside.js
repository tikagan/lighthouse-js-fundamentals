var raining = false;
var cold = false;
var temperature = 24;

/*if (raining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Hope the sun is out!");
}

if (cold) {
  console.log("Make sure you pickout a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

