const convertToCelsius = function(input) {
  if (typeof(input) != "number") {
    return "ERROR";
  } 
  let celsius = (input-32) * (5.0/9.0);
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(input) {
  if (typeof(input) != "number") {
    return "ERROR";
  }
  let fahrenheit = input * (9.0/5.0) + 32;
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
