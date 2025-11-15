function convertToF(){

  const celsius = parseFloat(document.getElementById("celsius").value)

  if (isNaN(celsius)) {
    document.getElementById("fahrenheit").textContent = "Pleas exter a number";
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;

  document.getElementById("fahrenheit").textContent = celsius + fahrenheit + "°F";

}