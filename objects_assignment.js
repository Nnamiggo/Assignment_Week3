
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

var scosh = new Contact("scovia", "Nnamiggo", "0703268406", "wakiso", "kampala", "uganda");
var arthur = new Contact("Arthur", "King", "0703268406", "wakiso", "kampala", "uganda");

/* implementing delete function */

var deleting_you; //This holds what I want to delete either input or a constant

for(let i=0; i<my_address_book.length; i++)
	{
	if(my_address_book[i]=== deleting_you)
		{ 
			my_address_book.splice(i,1); 

			console.log(deleting_you + "has been deleted");
			
		} 
	}

/* implementing edit code */


var editing_you; //This holds the object whose properties I want to edit either input or a constant

var gona_edit_you=false; //This turns to true if the instance is in the array that holds instance

for(let i=0; i<my_address_book.length; i++)
	{
	if(my_address_book[i]=== editing_you)
		{ 
			var gona_edit_you = true;
		} 
	}

	if(gona_edit_you==true) //if object was found then.....
	{ 
		//change some values
		var object_index_array = Object.keys(editing_you);
			object_index_array[0] = "new value"; //editing value at first index
			object_index_array[1] = "new value"; //editing value at second index
			object_index_array[2] = "new value"; //editing value at third index
			object_index_array[3] = "new value"; //editing value at fourth index........e.t.c
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
	}
  if (gona_delete_you==true) 
  	{
  		my_trush_can.push(my_address_book[i]);
        my_address_book.splice(i,1);
        return (my_address_book[i] + "has been deleted!!!!. It can be restored from the trush can");
    }
  }

  //Recover function
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
      return (my_trush_can[i] + "has been restored!!!!");
  }
}
}
