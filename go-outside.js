var raining = true;
var cold = false;
var temperature = 15;


if (raining) {
	console.log("Don't forget your umbrella!");
	//var cold = true;
}

if (temperature < 0) {
	console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
	console.log("Short sleeves won't cut it!");
} else {
	console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

if (!cold) {
	console.log("What a nice day.")
}

if (temperature < -40 || temperature > 40){
	console.log("Stay indoors!!!!!!");
}
