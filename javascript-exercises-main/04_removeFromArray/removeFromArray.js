const removeFromArray = function(inputArray, ...toDelete) {
  outputArray = Array();
  for (let i = 0; i<inputArray.length; i++){
    let deleteFlag = false;
    for (let j = 0; j<toDelete.length; j++){   
      if (inputArray[i] === toDelete[j]){
        deleteFlag = true;
      }
    }
    if (!deleteFlag){
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
