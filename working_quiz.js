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
//console.log(place_holder);

//Explore viewing, adding and updating more properties and methods on your flower object.
var my_indexes = Object.keys(Flower);
//console.log(my_indexes);

//get value of the first index
let Flower_index = my_indexes[1];
//console.log("My Flower's " + Flower_index + " is " + Flower[Flower_index]);

let my_values = Object.values(Flower);
//console.log(my_values);

//Try using some of the string, number and array methods you have used
// before on the properties that store these types of data.

/*.........get a property that holds an array ................*/
for(var i =0; i<my_values.length; i++)
{
	var findarray = my_values[i];
	if(findarray.isArray == true)
		{
			console.log(findarray[]);
		}
}