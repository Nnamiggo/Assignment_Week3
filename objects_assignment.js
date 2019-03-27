
//Pseudo code

/*
___________________________________________________________________________________________________

Create a constructor call it Contact
Give it attributes=> fist name, second name, phone number, email and  adress but............
Store the Address as an object which contains street, city, country. and..........
Add a prototype method that returns the full Address of the user in form of street + ", " + city + " " + state
____________________________________________________________________________________________________
*/

/*...............................Optional:.................................*/

//Add ways of editing and deleting contacts from your address book. All fields except email address should be editable.
//pseudo
	// First create the address book as an array to hold each object that is created
	// delete function 
		/* search the array containing created objects if the value exits delete it then also stop */
	// create edit code
		/* search the array containing created objects if the value exits edit it then also stop */
		//
//Add an ID field to your address, so that I can look it up using its numeric ID.

// Can you add functionality that sends deleted contacts to a trash can 
// (temporary memory) so that they are not deleted completely the first time and can be recovered later
//  using a recover function? */

//Pseudo code

var my_address_book =[];


function Contact(first_name, second_name, phone_number, email, street, city, country)
	{
		this.first_name = first_name;
		this.second_name = second_name;
		this.phone_number = phone_number;
		this.email = email;
		this.address = {};
		this.address.street = street;
		this.address.city = city;
		this.address.country = country;
		this.ID = Math.floor(Math.random()*1000000000000); //creating an Id with random values
		my_address_book.push(this);
	};

		Contact.prototype.full_address = function() {
			return(this.address.street + ", " + this.address.city + ", " + this.address.country);
			
			};

var scosh = new Contact("scovia", "Nnamiggo", "0703268406", "2305senk@gmail.com", "wakiso", "kampala", "uganda");
var arthur = new Contact("Arthur", "King", "0703268406", "2305senk@gmail.com", "wakiso", "kampala", "uganda");

/* implementing delete function */

var deleting_you =(my_object) => { //pass in the object you want to delete

for(let i=0; i<my_address_book.length; i++)
	{
	if(my_address_book[i]=== my_object)
		{ 
			my_address_book.splice(i,1); 

			console.log(my_object + "has been deleted");
			
		} 
	}
}

/* implementing edit code */

//function takes in name of the object and some values you want to change in that object
var editing_you=(name_of_object, new_value1, new_value2, new_value3, new_valueetc) => { 

var gona_edit_you=false; //This turns to true if the instance is in the array that holds instance

for(let i=0; i<my_address_book.length; i++)
	{
	if(my_address_book[i]=== name_of_object)
		{ 
			gona_edit_you = true;
		} 
	
	if(gona_edit_you==true) //if object was found then.....
	{						//change some values

		var object_index_array = Object.keys(name_of_object);

			name_of_object[object_index_array[0]] = new_value1; //editing value at first index
			name_of_object[object_index_array[1]] = new_value2; //editing value at second index
			name_of_object[object_index_array[2]] = new_value3; //editing value at third index
			name_of_object[object_index_array[3]] = new_valueetc; //editing value at fourth index........e.t.c
			return (Object.values(name_of_object));
	}
}
}
/* Edit code ends here */

//Temporary deleting function
var my_trush_can = [];
var delete_some_object = (name_of_object) => {
	var gona_delete_you=false; //This turns to true if the instance is in the array that holds instance

for(let i=0; i<my_address_book.length; i++) // address book is an array containing objects
	{
	if(my_address_book[i]=== name_of_object)
		{ 
			var gona_delete_you = true;
		} 
  if (gona_delete_you==true) 
  	{
  		my_trush_can.push(my_address_book[i]);
        my_address_book.splice(i,1);
        return (name_of_object + "has been deleted!!!!. It can be restored from the trush can");
    }
  }
}

  //Recover function takes in the name of the object you want to recover as argument
  var restore = (name_of_object) => {
  var object_present = false;
  for(var i=0; i<my_trush_can.length ; i++)
  	{
    if(my_trush_can[i] === name_of_object){
      object_present = true;
    }
   if(object_present === true){
      my_address_book.push(my_trush_can[i]);
      my_trush_can.splice(i,1);
      return (name_of_object + "has been restored!!!!");
  }
}
}

// console.log(delete_some_object(scosh));
// console.log(restore(scosh));
console.log(deleting_you(scosh));
