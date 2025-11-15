function changeText() {
	console.log("The button is clicked!");
	var paragraphTextChange = document.getElementById("change-text");
	var clickedButton = document.getElementById("click-me");
	

	do {
		if(paragraphTextChange.innerHTML == "Original Text") {
			paragraphTextChange.innerHTML = "Text has been changed!";
			console.log("The text has been changed into " + paragraphTextChange.innerHTML);
		}
		else {
			paragraphTextChange.innerHTML = "Original Text";
			console.log("The text has been changed into " + paragraphTextChange.innerHTML);
		}
	}while(clickedButton == true);
	
}