//Pseudo code

/*
___________________________________________________________________________________________________

Create a constructor call it Contact
Give it attributes=> fist name, second name, phone number, email and  adress
Assign the above attributes to values which will be the properties in the new object
Save the address as an array contains street, city, country.
Create a method that returns the full Address of the user in form of street + ", " + city + " " + state
____________________________________________________________________________________________________
*/
function Contact(first_name, second_name, phone_number, address)
	{
		this.first_name = first_name;
		this.second_name = second_name;
		this.phone_number = phone_number;
		this.address = address;
	}