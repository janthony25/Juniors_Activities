console.log("Hiyuuu, world!");
function showHidePassword() {

	var password = document.getElementById("password");

	if (password.type == "password") {
		password.type = "text";
		console.log("Password type change into: " + password.type);
	} 
	else {
		password.type = "password";
		console.log("Password type change into: " + password.type);
	}
}