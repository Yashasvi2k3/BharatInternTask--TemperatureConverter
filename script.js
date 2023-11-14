// script.js

function convertToFar() {
  var celsius = document.getElementById('celsius').value;
  var fahrenheit = (celsius * 9/5) + 32;
  document.getElementById('result').innerHTML = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
}

function convertToCel() {
  var fahrenheit = document.getElementById('celsius').value;
  var celsius = (fahrenheit - 32) * 5/9;
  document.getElementById('result').innerHTML = fahrenheit + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.";
}
