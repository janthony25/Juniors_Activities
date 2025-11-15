function count() {
	var counterDisplay = document.getElementById("counter");
	var counter = counterDisplay.innerHTML; //Assigned the value of span which is equal to 0
	counter++;
	counterDisplay.innerHTML = counter; //Display the incremented value when the button is clicked
	
	// console.log("The value of counter is: " + counter);

	// counter++;
	// console.log("The counter is now: " + counter);
	
	
}