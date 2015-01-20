//JS4 Victims and Volunteers

var victims = prompt("How many disaster victims do you wish to enter?");

for (i = 0; i < victims; i++) {

	var victimName = prompt("Please enter your name.");

	var victimPhone = prompt("Please enter your phone number.");

	var victimStreet = prompt("Please enter your street.");
}

var victimsList = [];
victimsList.push(victimName, victimPhone, victimStreet);

var volunteers = prompt("How many volunteers do you have?");

for (i = 0; i < volunteers; i++) {

	var volunteersName = prompt("Please enter your name.");

	var volunteersPhone = prompt("Please enter your phone number.");

	var volunteersStreet = prompt("Please enter your street.");
}

var volunteersList = [];
volunteersList.push(volunteersName, volunteersPhone, volunteersStreet);

var victimsLog = "Victims: " + victims + "\n" +
				"Volunteers: " + volunteers + "\n" +
				"Victims\n";


for (var i = 0; i < victims; i++) {
	victimsLog += "Name: "+ victimName + ", " +
				"Phone: " + victimPhone + ", " +
				"Street: " + victimStreet + "\n";
			}

victimsLog += "Volunteers:\n";

for (var i = 0; i < volunteers; i++) {
	victimsLog += "Name: "+ volunteersName + ", " +
				"Phone: " + volunteersPhone + ", " +
				"Street: " + volunteersStreet + "\n";
			}	

alert(victimsLog);
