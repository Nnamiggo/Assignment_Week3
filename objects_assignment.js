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

		this.my_address = function(street, city, state) {
			var value_in_address =  this.address;
			// this.street = street;
			// this.city = city;
			// this.state = state;
			street=value_in_address[0];
			city = value_in_address[1];
			state= value_in_address[2];
			return (street + ", " + city + " " + state);
	};

//function my_address(street, city, state){this.street=street; this.city=city; this.state=state;}
var scosh = new Contact("scovia", "Nnamiggo", "0703268406", ["wakiso", "kampala", "uganda"]);

console.log(scosh.address);