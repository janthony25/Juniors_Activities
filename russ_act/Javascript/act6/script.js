console.log("Hiyuuu, world!");
function showHidePassword() {
	// initial view of password will be dots/asterisks
	var password = document.getElementById("password");

	if (password.type == "password") {
		password.type = "text"; //will show the asterisks and return it as text
		console.log("Password type change into: " + password.type);
	} 
	else {
		password.type = "password"; //will return back to password type
		console.log("Password type change into: " + password.type);
	}
}