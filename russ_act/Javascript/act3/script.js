console.log("Connected, succesfully!");


function getTheSum() {
	var num1 = Number(document.getElementById("input-1").value);
	var num2 = Number(document.getElementById("input-2").value);
	var sum = num1 + num2; //Operation of Num1 and Num2
	document.getElementById("sum").textContent = sum; //Out put of Sum will be output here
	console.log("The sum of Num 1 and Num 2 is: " + sum);
}