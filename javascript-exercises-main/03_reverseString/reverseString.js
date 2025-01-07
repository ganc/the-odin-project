const reverseString = function(inputString) {
  const stringLength = inputString.length;
  let outputString = "";
  for (let i = 0; i<stringLength; i++){
    outputString += inputString.charAt(stringLength-(i+1));
  }
  return outputString;
};

// Do not edit below this line
module.exports = reverseString;
