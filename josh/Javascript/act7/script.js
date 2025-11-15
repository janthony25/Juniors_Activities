
//Solution
//1. Create an input field
//2. Create a button
//3. When clicked convert input to Fahrenheit.
//4. Create a function to convert Celsius to Fahrenheit 
//5. Use the formula F=(c x 9/5 ) + 32
//6. Create Variable to store result
//7. Display Result


function convertCelsius() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5 ) + 32;
    let result = fahrenheit;

    document.getElementById("result").textContent = result;
    console.log(result);

}

