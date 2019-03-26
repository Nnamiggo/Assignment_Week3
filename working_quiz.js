//Create an object that stores information about a Flower including name, color, and height.
var Flower = {
	name: "Sun Flower",
	color : "Yellow",
	height: 30
};

//Change the color of your Flower using dot notation.
Flower.color = "Yellow green";

//Change the height of your Flower using bracket notation.
Flower["height"]=30;

//Add a property that indicates what kind of creatures
// help the Flower with pollination. This includes bees, butterflies and birds.
Flower.pollinators =["bees", "butterflies", "birds"];

//Add one more creature to your list: humans
Flower.pollinators.push('humans');
//console.log(Flower.pollinators[Flower.pollinators.length-1]);

//Write a method that allows the Flower to grow. After the method is run, the height value should be increased.
Flower.grow = function(){
	//add property rainfall and temperature
	Flower.rainfall = 30;
	Flower.temperature = 20;
	if(Flower.rainfall>=30 && Flower.temperature>=20){let new_height = Flower.height +2; return new_height;}

};

//View all of the properties and methods for your Flower object.
let place_holder = Object.entries(Flower);
console.log(place_holder);