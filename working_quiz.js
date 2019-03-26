//Create an object that stores information about a flower including name, color, and height.
var flower = {
	name: "Sun flower",
	color : "Yellow",
	height: 30
};

//Change the color of your flower using dot notation.
flower.color = "Yellow green";

//Change the height of your flower using bracket notation.
flower["height"]=30;

//Add a property that indicates what kind of creatures
// help the flower with pollination. This includes bees, butterflies and birds.
flower.pollinators =["bees", "butterflies", "birds"];

//Add one more creature to your list: humans
flower.pollinators.push('humans');
//console.log(flower.pollinators[flower.pollinators.length-1]);

//Write a method that allows the flower to grow. After the method is run, the height value should be increased.
flower.grow = function(){
	//add property rainfall and temperature
	flower.rainfall = 30;
	flower.temperature = 20;
	if(flower.rainfall>=30 && flower.temperature>=20){let new_height = flower.height +2; return new_height;}

};

//View all of the properties and methods for your flower object.
console.log(flower.entries());