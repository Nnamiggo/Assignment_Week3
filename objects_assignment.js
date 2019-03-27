//Pseudo code

/*
___________________________________________________________________________________________________

Create a constructor call it Contact
Give it attributes=> fist name, second name, phone number, email and  adress but............
Store the Address as an object which contains street, city, country. and..........
Add a prototype method that returns the full Address of the user in form of street + ", " + city + " " + state
____________________________________________________________________________________________________
*/



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
		//this.full_address = function(){ console.log(this.address.street + ", " + this.address.city + " " + this.address.country)};
	};


		Contact.prototype.full_address = function() {
			// var value_in_address =  this.address;
			// this.street=value_in_address[0];
			// this.city = value_in_address[1];
			// this.state= value_in_address[2];
			return(this.address.street + ", " + this.address.city + " " + this.address.country);
			
			};
var scosh = new Contact("scovia", "Nnamiggo", "0703268406","2305senk@gmail.com", "wakiso", "kampala", "uganda");

console.log(scosh.full_address());