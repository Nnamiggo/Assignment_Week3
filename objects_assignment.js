//Pseudo code

/*
___________________________________________________________________________________________________

Create a constructor call it Contact
Give it attributes=> fist name, second name, phone number, email and  adress
Assign the above attributes to values which will be the properties in the new object
Store the Address as an object which contains street, city, country.
Create a method that returns the full Address of the user in form of street + ", " + city + " " + state
____________________________________________________________________________________________________
*/
function Contact(first_name, second_name, phone_number, email, address)
	{
		this.first_name = first_name;
		this.second_name = second_name;
		this.phone_number = phone_number;
		this.email = email;
		this.address = address;

	}


		Contact.prototype.my_address = function() {
			var value_in_address =  this.address;
			this.street=value_in_address[0];
			this.city = value_in_address[1];
			this.state= value_in_address[2];
			return (this.street + ", " + this.city + " " + this.state);
			
			};
var scosh = new Contact("scovia", "Nnamiggo", "0703268406","2305senk@gmail.com", ["wakiso", "kampala", "uganda"]);

console.log(scosh.street);