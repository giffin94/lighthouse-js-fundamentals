var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0;

while (counter < ingredients.length){
console.log(ingredients[counter]);
counter++;
}

for(counter = 0; counter < ingredients.length; ++counter){
  console.log(ingredients[counter]);
}

for (counter = ingredients.length - 1; counter > 0; counter--){
  console.log(ingredients[counter]);
}
