const sumAll = function(rangeA, rangeB) {
  // Return "ERROR" if not an integer
  if (!Number.isInteger(rangeA) || !Number.isInteger(rangeB)){
    return "ERROR";
  }
  // Return "ERROR" if negative numbers
  if (rangeA < 0 || rangeB < 0){
    return "ERROR";
  }
  if (rangeA <= rangeB){
    return sumAllHelper(rangeA, rangeB);
  } else {
    return sumAllHelper(rangeB, rangeA);
  }
};

const sumAllHelper = function(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
