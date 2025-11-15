function celsiusToFahrenheit() {
  var celsius = document.querySelector('input[type="number"]').value;
  var fahrenheit = (celsius * 9 / 5) + 32;
  var result = document.querySelector("#fahrenheit");
  result.textContent = fahrenheit +" °F";
  console.log(fahrenheit);

}