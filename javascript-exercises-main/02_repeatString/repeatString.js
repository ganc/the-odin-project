const repeatString = function(inputString, repeatCount) {
  let outputString = ""
  for (let i = 0; i<repeatCount; i++){
    outputString += inputString;
  }
  return outputString;
};

// Do not edit below this line
module.exports = repeatString;
