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
	// create edit function 
	// create delete function

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
		my_address_book.push(this);
	};

		Contact.prototype.full_address = function() {
			return(this.address.street + ", " + this.address.city + ", " + this.address.country);
			
			};

/*...............................Optional:.................................*/

//Add ways of editing and deleting contacts from your address book. All fields except email address should be editable.
//pseudo
	// First create the address book
	// create edit function 
	// create delete function
var scosh = new Contact("scovia", "Nnamiggo", "0703268406", "wakiso", "kampala", "uganda");
var arthur = new Contact("Arthur", "King", "0703268406", "wakiso", "kampala", "uganda");

	//for each contact that is created push it in the my_address_book array
	// my_address_book.push(Contact);
console.log(my_address_book.value);

// > Add an ID field to your address, so that I can look it up using its numeric ID.

// > Can you add functionality that sends deleted contacts to a trash can 
// (temporary memory) so that they are not deleted completely the first time and can be recovered later
//  using a recover function? */

// // Pseudo code