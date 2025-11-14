console.log("----This is Activity 4----");
function clickToToggle() {

	//Method #1
	// document.getElementById("toggle-switch").addEventListener('click', function() {
	// 	var paragraph = document.getElementById('main-paragraph');
	// 	if (paragraph.style.display === 'block') 
	// 	{
	// 		paragraph.style.display = 'none'; //changes the display style of the paragraph			
	// 		console.log("The display change into: none");
	// 	} else {
	// 		paragraph.style.display = "block"; 
	// 		console.log("The display change into: block");
	// 	}
	// });

	//Method #2 --> This is one is working and much simplier than the first method.
	var paragraph = document.getElementById("main-paragraph");
	if (paragraph.style.display == "block")//check if the display style is == None
	{
		paragraph.style.display = "none"; //changes the dispaly style of the paragraph
		console.log("The display style changed into: none");
	} else {
		paragraph.style.display = "block"; 
		console.log("The display style changed into: block");
	}

}
// note:
/*

- How to change the external css, rather than inline style....
*/




