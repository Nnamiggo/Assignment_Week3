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
pollinators.push('humans');
console.log(pollinators[pollinators.length-1]);